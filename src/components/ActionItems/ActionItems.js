import React, { Fragment } from 'react';
import { Card, Icon } from 'antd';

import styles from './ActionItems.module.css';

const IconText = ({type, value, inlineStyle}) => (
    <span className={styles.ActionItem} style={inlineStyle}>
        <Icon type={type} className={styles.Icon} />
        {value}
    </span>
);

const actionItems = (props) => {
    return (
        <div className={styles.ActionItems}>
            <IconText type="like" value="19" />
            <IconText type="star" inlineStyle={{ float: 'right' }}/>
            <IconText type="message" value="6" />
            <IconText type="eye" value="123" />
        </div>
    )
}

export default actionItems;