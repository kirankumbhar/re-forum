import React from 'react';
import { List } from 'antd';

import Post from './Post/Post';

const posts = (props) => {
    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 10
            }}
            dataSource={props.postData}
            renderItem={item => (
                <Post
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    author={item.author}
                />
            )}
        />
    )
}

export default posts;