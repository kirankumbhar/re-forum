import React, { Fragment } from 'react';
import { Skeleton, Card, Avatar } from 'antd';

import styles from './FullPost.module.css';
import { getUsernameInitials } from '../../utils';
import ActionItems from '../ActionItems/ActionItems';

import * as constants from '../../../src/constants'

const { Meta } = Card;
const fullPost = (props) => {
    let post = null;
    if (props.postData) {
        post = (
            <Fragment>
                <h2>{props.postData[constants.POST_TITLE]}</h2>
                <Meta
                    avatar={
                        <Avatar>{getUsernameInitials(props.postData[constants.POST_AUTHOR])}</Avatar>
                    }
                    title={props.postData[constants.POST_AUTHOR]}
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
                <ActionItems
                    likeCount = {props.postData ? props.postData[constants.POST_LIKES] : 0 }
                    viewCount = {props.postData ? props.postData[constants.POST_VIEWS] : 0 }
                    liked={props.liked}
                    postLikeHandler={props.postLikeHandler}
                />
            </Card>
        </Fragment>
    );
}

export default fullPost;