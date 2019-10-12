import React, { Component } from 'react';
import {Layout} from 'antd';
import { Link } from 'react-router-dom';


import classes from './BaseLayout.module.css';
import NavBar from './Header/NavBar/NavBar';
import RightMenu from './Header/RightMenu/RightMenu';

const {Header, Content, Footer} = Layout;

class BaseLayout extends Component {

    render() {
        return (<Layout className={classes.Layout}>
            <Header className={classes.Header}>
                <div className={classes.Title}>
                    <Link to="/" ><h1>Re-Forum</h1></Link>
                </div>
                <NavBar/>
                <RightMenu username="JD"/>
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