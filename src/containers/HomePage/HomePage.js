import React, { Component } from 'react';
import { List } from 'antd';

import Posts from '../../components/Posts/Posts';
import styles from './HomePage.module.css';

class HomePage extends Component {
    onClickhandler() {
        console.log('Clicked');

    }
    render() {
        //dummy data 
        const categories = [
            'Sports',
            'Science',
            'Technology',
            'Games',
            'Movies',
            'Others'
        ];
        const postData = []
        for (let i = 0; i < 37; i++) {
            postData.push({
                id: i,
                author: 'John doe',
                title: "Title of the topic " + (i + 1),
                description: "Re-forum is the discussion forum" +
                    "based on reactjs and redux Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            });
        }
        return (
            <section className={styles.Main}>
                <List className={styles.Categories}
                    header={<h2>Categories</h2>}
                    bordered
                    dataSource={categories}
                    renderItem={item => (
                        <List.Item className={styles.ListItem} onClick={this.onClickhandler}>
                            {item}
                        </List.Item>
                    )}
                />
                <div className={styles.Posts}>
                    <Posts postData={postData} />
                </div>
            </section>
        );
    }
}

export default HomePage;