import React, { Component, Fragment } from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';


import classes from './BaseLayout.module.css';
import NavBar from './Header/NavBar/NavBar';
import RightMenu from './Header/RightMenu/RightMenu';
import * as actions from '../../store/actions/auth';
import { connect } from 'react-redux';

const { Header, Content, Footer } = Layout;

class BaseLayout extends Component {
    componentDidMount() {
        if (this.props.isUserActive) {
            this.props.getUser();
        }
    }
    compo

    render() {
        return (<Layout className={classes.Layout}>
            <Header className={classes.Header}>
                <div className={classes.Title}>
                    <Link to="/" ><h1>Re-Forum</h1></Link>
                </div>
                {
                    this.props.isUserActive ?
                        <Fragment>
                            <NavBar />
                            <RightMenu username={this.props.username ? this.props.username : ""} />
                        </Fragment>
                        : null
                }
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

const mapStateToProps = (state) => {
    return {
        isUserActive: state.auth.isUserActive,
        loading: state.auth.loading,
        username: state.auth.username
    }
}

const mapDisptachToProps = (dispatch) => {
    return {
        getUser: () => dispatch(actions.meApi())
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(BaseLayout);