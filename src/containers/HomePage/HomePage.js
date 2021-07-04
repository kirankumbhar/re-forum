import React, { Component } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { List } from 'antd';
import { connect } from 'react-redux';

import Posts from '../../components/Posts/Posts';
import styles from './HomePage.module.css';
import * as actions from '../../store/actions/index';
class HomePage extends Component {
    state = {
        selectedCategory: null,
        posts: null,
    }

    componentDidMount () {
        this.props.onInitPosts();
    }
    render() {
        //dummy categories 
        const categories = [
            'Tech',
            'Sports',
            'Finance',
            'Entertainment',
            'Others'
        ];
        
        return (
            <section className={styles.Main}>
                <List className={styles.Categories}
                    header={<h2>Categories</h2>}
                    bordered
                    dataSource={categories}
                    renderItem={item => (
                        <List.Item className={styles.ListItem}>
                            {item}
                        </List.Item>
                    )}
                />
                <div className={styles.Posts}>
                    {this.props.posts == null ? <LoadingOutlined className={styles.LoadingIcon} /> : <Posts postData={this.props.posts} />}
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
      onInitPosts: () => dispatch(actions.initPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);