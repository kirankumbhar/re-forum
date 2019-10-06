import React, { Component } from 'react';
import {Layout} from 'antd';
import { Link } from 'react-router-dom';

import classes from './BaseLayout.module.css';
import NavBar from './Header/NavBar/NavBar';
import RightMenu from './Header/RightMenu/RightMenu';
import PostCreateForm from '../../components/PostCreateForm/PostCreateForm';

const {Header, Content, Footer} = Layout;

class BaseLayout extends Component{
    state = {
        modalVisible: false,
        redirect: null
    }

    createTopicClickHandler = () => {
        this.setState({
            ...this.state,
            modalVisible: true
        });
    }

    postCancelHandler = () => {
        this.setState({
            ...this.state,
            modalVisible: false
        });
    }

    postSubmitHandler = () => {
        const { form } = this.formRef.props;
        
        form.validateFields((err, values) => {
            
            if (err) {
                return;
            }
            
            const title = values.title;
            const description = this.formRef.state.text;
            //make post request to and if success show post details page with new post
            form.resetFields();
            this.formRef.setState({text: ''});
            this.setState({ modalVisible: false });
        });
    }

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

    render() {
    return (<Layout className={classes.Layout}>
        <Header className={classes.Header}>
            <div className={classes.Title}>
                <Link to="/" ><h1>Re-Forum</h1></Link>
            </div>
            <NavBar/>
            <RightMenu clickHandler={this.createTopicClickHandler} username="KK"/>
        </Header>
        <Content className={classes.Content}>
            {this.props.children}
            <PostCreateForm 
                visible={this.state.modalVisible}
                onCancel={this.postCancelHandler}
                onSubmit={this.postSubmitHandler}
                wrappedComponentRef={this.saveFormRef}
            />
        </Content>
        <Footer className={classes.Footer}>
            <p>React Forum module made with <span role='img' aria-label="love">❤️</span></p>
        </Footer>
        
    </Layout>)
    }
}
export default BaseLayout;