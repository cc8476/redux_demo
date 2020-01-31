import React, { useState } from 'react'

function App() {
    //useState是一个HOOK
    //useState 会返回一对值：当前状态和一个让你更新它的函数
    const [count, setCount] = useState(0);
    //count 是当前状态，初始值是useState()的参数
    //setCount:更新函数,类似于this.setState函数

    //声明多个useState()
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

    return (
        <div>
            <button onClick={()=> setCount(count + 1)}>+</button>
            <span>{count}</span>
            <button onClick={() => setCount((count) => count - 1)}>-</button>
        </div>
    );
}

export default App;