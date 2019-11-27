import React, { Component } from 'react';
import { Card } from 'antd';
import { connect } from 'react-redux'

// import { getUsernameInitials } from '../../utils';
import FullPost from '../../components/FullPost/FullPost';
import Comments from '../../components/Comments/Comments';
import CommentForm from '../CommentForm/CommentForm';
import styles from './PostDetails.module.css';
import * as actions from '../../store/actions/index';

class PostDetails extends Component {
    state = {
        error: false,
        liked: false,
    }

    componentDidMount() {
        this.props.onInitPost(this.props.match.params.id);
        this.props.onInitComments(this.props.match.params.id);
    }

    postLikeHandler = () => {
        this.setState({
            ...this.state,
            liked: !this.state.liked
        });
    }

    render() {
        let post = <FullPost 
            liked={this.state.liked}
            postData={this.props.postData}
            postLikeHandler={this.postLikeHandler}
            loading={this.props.loading}
        />;
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
                    <Comments
                        comments={this.props.comments}
                        commentLoading={this.props.commentLoading}
                        loading={this.props.commentsLoading}
                    />
                </Card>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        postData: state.post.post,
        loading: state.post.loading,
        comments: state.post.comments,
        commentsLoading: state.post.commentsLoading, //loading while fetching all comments
        commentLoading: state.post.commentLoading //loading while new comment is created
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitPost : (id) => dispatch(actions.getPost(id)),
        onInitComments : (id) => dispatch(actions.getComments(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);