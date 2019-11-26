import React, { Fragment } from 'react';
import { Skeleton, Card, Avatar } from 'antd';

import styles from './FullPost.module.css';
import { getUsernameInitials } from '../../utils';
import ActionItems from '../ActionItems/ActionItems';

const { Meta } = Card;
const fullPost = (props) => {
    let post = null;
    if (props.postData) {
        post = (
            <Fragment>
                <h2>{props.postData.title}</h2>
                <Meta
                    avatar={
                        <Avatar>{getUsernameInitials(props.postData.author)}</Avatar>
                    }
                    title={props.postData.author}
                />
                <div className={styles.Description} dangerouslySetInnerHTML={{__html: props.postData.description}}/>
            </Fragment>
        );
    }
    return (
        <Fragment>
            <Card style={{ marginTop: 16 }}>
                <Skeleton loading={props.loading} avatar paragraph={{ rows: 6 }}>
                    {post}
                </Skeleton>
                <ActionItems liked={props.liked} postLikeHandler={props.postLikeHandler} />
            </Card>
        </Fragment>
    );
}

export default fullPost;