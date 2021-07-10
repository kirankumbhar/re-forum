import React, { Fragment } from 'react';
import { Skeleton, Card, Avatar } from 'antd';
import { ThumbsUp, MessageCircle, Bookmark, Eye, Clock } from "react-feather";

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
                    <div className={styles.RightItems}>
                        <Eye className={styles.Icon} />
                        <span className={styles.IconSideText}>
                            {17}
                        </span>
                        <Clock className={styles.Icon} />
                        <span className={styles.IconSideText} style={{ marginRight: 0 }}>2h</span>
                    </div>
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
                    <ThumbsUp onClick={() => props.postLikeHandler()} className={styles.Icon} />
                    <span className={styles.IconSideText}>
                        {props.postData ? props.postData[constants.POST_LIKES] : 0}
                    </span>
                    <MessageCircle className={styles.Icon} />
                    <span className={styles.IconSideText}>
                        {props.noOfComments ? props.noOfComments : 0}
                    </span>
                    <Bookmark className={styles.Icon} style={{ marginLeft: "auto" }} />
                </div>
            </Card>
        </Fragment>
    );
}

export default fullPost;