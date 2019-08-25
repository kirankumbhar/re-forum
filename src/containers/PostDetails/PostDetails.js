import React, { Component, Fragment } from 'react';
import { Icon, Skeleton, Card, Avatar } from 'antd';

import axios from '../../axios';
import { getUsernameInitials } from '../../utils';
import FullPost from '../../components/FullPost/FullPost';
import Comments from '../../components/Comments/Comments';
import styles from './PostDetails.module.css';
const { Meta } = Card;

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
        getUsernameInitials('Kiran');
        getUsernameInitials('Kiran Kumbhar');
        getUsernameInitials('Kiran P Kumbhar');
        let post = <FullPost postData={this.state.postData} loading={this.state.loading} />;
        if (this.state.error) {
            post = <p> There was some problem loading Topic. Please try again later! </p>
        }
        return (
            <section className={styles.PostDetails}>
                {post}
                <Card>
                <Comments/>
                </Card>
            </section>
        )
    }
}

export default PostDetails;