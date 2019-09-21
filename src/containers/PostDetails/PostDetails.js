import React, { Component } from 'react';
import { Card } from 'antd';
import { connect } from 'react-redux'

import axios from '../../axios';
// import { getUsernameInitials } from '../../utils';
import FullPost from '../../components/FullPost/FullPost';
import Comments from '../../components/Comments/Comments';
import CommentForm from '../../components/Comments/CommentForm/CommentForm';
import styles from './PostDetails.module.css';
import * as actions from '../../store/actions/index';

class PostDetails extends Component {
    state = {
        error: false,
        commentReplyId: null,
        liked: false,
    }

    componentDidMount() {
        this.props.onInitPost(this.props.match.params.id);
    }

    commentReplyHandler = (event) => {
        this.setState({
            ...this.state,
            commentReplyId: event.target.id
        });
    }

    postLikeHandler = () => {
        this.setState({
            ...this.state,
            liked: !this.state.liked
        });
    }

    render() {
        let post = <FullPost liked={this.state.liked} postData={this.props.postData} postLikeHandler={this.postLikeHandler} loading={this.props.loading} />;
        if (this.state.error) {
            post = <p> There was some problem loading Topic. Please try again later! </p>
        }
        return (
            <section className={styles.PostDetails}>
                {post}
                <Card className={styles.CommentsCard}>
                <section className={styles.AddComment}>
                    <CommentForm />
                </section>
                <Comments commentReplyHandler={this.commentReplyHandler} commentReplyId={this.state.commentReplyId} />
                </Card>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        postData: state.post.post,
        loading: state.post.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitPost : (id) => dispatch(actions.initPost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);