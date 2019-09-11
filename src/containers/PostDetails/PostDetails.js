import React, { Component } from 'react';
import { Icon, Comment, Card, Avatar, Form, Input, Button } from 'antd';

import axios from '../../axios';
import { getUsernameInitials } from '../../utils';
import FullPost from '../../components/FullPost/FullPost';
import Comments from '../../components/Comments/Comments';
import CommentForm from '../../components/Comments/CommentForm/CommentForm';
import styles from './PostDetails.module.css';

class PostDetails extends Component {
    state = {
        loading: true,
        postData: null,
        error: false
    }

    componentDidMount() {
        axios.get('/posts/' + this.props.match.params.id + '.json').then(response => {
            this.setState({
                ...this.state,
                postData: response.data,
                error: false,
                loading: false
            });
        }).catch(error => {
            this.setState({
                ...this.state,
                error: true,
                loading: false
            });
        });

    }
    render() {
        let post = <FullPost postData={this.state.postData} loading={this.state.loading} />;
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
                <Comments/>
                </Card>
            </section>
        )
    }
}

export default PostDetails;