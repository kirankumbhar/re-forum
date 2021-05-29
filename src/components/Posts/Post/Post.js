import React from 'react';
import { List, Icon, Avatar } from 'antd';
import { Link } from 'react-router-dom';

import styles from './Post.module.css';
import { getUsernameInitials } from '../../../utils';


const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

const post = (props) => {
    
    return (
        <List.Item
            className={styles.Post}
            key={props.id}
            actions={[
                <IconText type="like-o" text={props.likes} />,
                <IconText type="message" text={(Math.random() * 10).toFixed(0).toString()} />,
                <IconText type="eye" text={(Math.random() * 1000).toFixed(0).toString()} />,
                <IconText type="clock-circle" text={props.publishedDate} />
            ]}
        >
            <h3>
            <Link to={'post/' + props.id}>{props.title}</Link>
            </h3>
            <List.Item.Meta
            className={styles.ListItemMeta}
                avatar={
                <Avatar>{getUsernameInitials(props.author)}</Avatar>
                }
                title={props.author}

            />
            <div>{props.description}</div>
        </List.Item>
    )
}

export default post;