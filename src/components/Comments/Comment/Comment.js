import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import { Fragment } from "react";
import { ThumbsUp } from "react-feather";

import styles from "./Comment.module.css"
import { getUsernameInitials } from "../../../utils";

const Comment = (props) => {
    return (
        <Fragment>
            <div className={styles.CommentCard}>
                <div >
                    <Avatar style={{ color: "#d2e8fc", backgroundColor: "#1890ff" }}>{props.authorName ? getUsernameInitials(props.authorName) : ""}</Avatar>
                    <span className={styles.CommentAuthor}>{props.authorName}</span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: props.commentBody }} className={styles.CommentBody}>
                </div>
            </div>
            <div className={styles.ActionItems}>
                <ThumbsUp className={styles.Like} size={16} />
                <span className={styles.LikeNumber}>{props.postData ? props.likes : 0}</span>
                <span className={styles.Dot}></span>
                {props.replyClickHandler ? <span className={styles.ReplyTo} onClick={(event) => props.replyClickHandler(event)} id={props.id} key={"comment-nested-reply-to" + props.id}>Reply</span> : null}
                {/* {props.showReplyCommentForm ? <CommentForm /> : null} */}
            </div>
            <div className={styles.Replies}>
                {props.children}
            </div>
        </Fragment>

    )
}

export default Comment