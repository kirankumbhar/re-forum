import React from 'react';
import { List } from 'antd';

import Post from './Post/Post';
import * as constants from '../../constants'

const posts = (props) => {
    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                pageSize: 10
            }}
            dataSource={props.postData}
            renderItem={item => (
                <Post
                    id={item.id}
                    title={item[constants.POST_TITLE]}
                    description={item[constants.POST_DESCRIPTION]}
                    author={item[constants.POST_AUTHOR]}
                    publishedDate={item.publishedDate}
                />
            )}
        />
    )
}

export default posts;