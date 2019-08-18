import React, { Component } from 'react';
import { List, Icon } from 'antd';

import Posts from '../../components/Posts/Posts';
import styles from './HomePage.module.css';
import axios from '../../axios';

class HomePage extends Component {
    state = {
        selectedCategory: null,
        posts: null,
    }

    componentDidMount () {
        let postData = [];
        axios.get('/posts.json').then(response => {
            for (const key in response.data) {
                postData.push({
                    id: key,
                    title: response.data[key].title,
                    author: response.data[key].author,
                    description: response.data[key].description
                    
                });
            }
            this.setState({...this.state, posts: postData})
            
        }).catch(error => {
            console.log(error);
        })
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
                    {this.state.posts == null ? <Icon type="loading" className={styles.LoadingIcon}/> : <Posts postData={this.state.posts} />}
                </div>
            </section>
        );
    }
}

export default HomePage;