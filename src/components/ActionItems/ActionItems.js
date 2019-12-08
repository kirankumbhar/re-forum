import React from 'react';
import { Icon } from 'antd';

import styles from './ActionItems.module.css';

const IconText = ({type, value, theme, inlineStyle, iconStyle, onClick}) => (
    <span className={styles.ActionItem} style={inlineStyle}>
        <Icon type={type} theme={theme} className={styles.Icon} style={iconStyle} onClick={onClick} />
        {value}
    </span>
);

const actionItems = (props) => {
    return (
        <div className={styles.ActionItems}>
            {props.liked ? <IconText onClick={props.postLikeHandler} theme="filled" type="like" value={props.likeCount} /> : <IconText onClick={props.postLikeHandler} type="like" iconStyle={{ cursor:'pointer' }} value={props.likeCount} />}
            <IconText type="star" inlineStyle={{ float: 'right' }}/>
            <IconText type="message" value={props.commentCount} />
            <IconText type="eye" value={props.viewCount} />
        </div>
    )
}

export default actionItems;