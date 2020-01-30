/*
* Created by joechen  2020-01-30 21:11
*/
import React from 'react';
import Layout from './Layout';
import TestCom from './testCom';

class LayoutContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Layout>
                <TestCom></TestCom>

                <TestCom></TestCom>

                <TestCom></TestCom>

            </Layout>
        );
    }
}

export default LayoutContainer;
