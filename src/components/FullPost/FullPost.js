import React, { Fragment } from 'react';
import { Skeleton, Card, Avatar } from 'antd';
import { LikeOutlined } from "@ant-design/icons";

import styles from './FullPost.module.css';
import { getUsernameInitials } from '../../utils';

import * as constants from '../../../src/constants'

const { Meta } = Card;
const fullPost = (props) => {
    let post = null;
    if (props.postData) {
        post = (
            <Fragment>
                {/* <Meta
                    avatar={
                        <Avatar size={22}>{getUsernameInitials(props.postData[constants.POST_AUTHOR])}</Avatar>
                    }
                    title={props.postData[constants.POST_AUTHOR]}
                /> */}
                <div className={styles.AvatarHead}>
                    <Avatar>{getUsernameInitials(props.postData[constants.POST_AUTHOR])}</Avatar>
                    <span className={styles.AuthorName}>{props.postData[constants.POST_AUTHOR]}</span>
                </div>
                <h2>{props.postData[constants.POST_TITLE]}</h2>
                <div className={styles.Description} dangerouslySetInnerHTML={{ __html: props.postData.description }} />
            </Fragment>
        );
    }
    return (
        <Fragment>
            <Card className={styles.Post}>
                <Skeleton loading={props.loading} avatar paragraph={{ rows: 6 }}>
                    {post}
                </Skeleton>
                <div className={styles.ActionItems}>
                    <LikeOutlined className={styles.Icon} twoToneColor="#1890ff" />
                </div>
                {/* <ActionItems
                    likeCount={props.postData ? props.postData[constants.POST_LIKES] : 0}
                    viewCount={props.postData ? props.postData[constants.POST_VIEWS] : 0}
                    liked={props.liked}
                    postLikeHandler={props.postLikeHandler}
                /> */}
            </Card>
        </Fragment>
    );
}

export default fullPost;