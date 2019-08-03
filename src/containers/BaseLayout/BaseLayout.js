import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {Layout} from 'antd';

import classes from './BaseLayout.module.css';
import NavBar from './Header/NavBar/NavBar';
import RightMenu from './Header/RightMenu/RightMenu';

const {Header, Content, Footer} = Layout;

class BaseLayout extends Component{
render() {
 return (<Layout className={classes.Layout}>
     <Header className={classes.Header}>
        <div className={classes.Title}>
            <h1>Re-Forum</h1>
        </div>
        <NavBar/>
        <RightMenu username="kk"/>
     </Header>
     <Content className={classes.Content}>
         {this.props.children}
     </Content>
     <Footer className={classes.Footer}>
         <p>React Forum module made with <span role='img' aria-label="love">❤️</span></p>
     </Footer>
     
 </Layout>)
}
}
export default BaseLayout;