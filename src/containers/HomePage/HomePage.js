import React, { Component } from 'react';
import { List } from 'antd';

import styles from './HomePage.module.css';

class HomePage extends Component {
    onClickhandler() {
        console.log('Clicked');
        
    }
    render() {  
        const categories = [
            'Sports',
            'Science',
            'Technology',
            'Games',
            'Movies',
            'Others'
        ];
        return(
            <section className={styles.Main}>
                <List className={styles.List}
                    header={<h2>Categories</h2>}
                    bordered
                    dataSource={categories}
                    renderItem={item => (
                        <List.Item className= {styles.ListItem} onClick={this.onClickhandler}>
                            {item}
                        </List.Item>
                    )}
                />
            </section>
        );
    }
}

export default HomePage;