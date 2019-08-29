import React, { Component } from 'react';
import { Icon, Comment, Card, Avatar, Form, Input, Button } from 'antd';

import axios from '../../axios';
import { getUsernameInitials } from '../../utils';
import FullPost from '../../components/FullPost/FullPost';
import Comments from '../../components/Comments/Comments';
import styles from './PostDetails.module.css';

const { TextArea } = Input;

const CommentForm = (props) => (
    <div>
        <Form.Item>
            <TextArea rows={4} onChange={props.onChange} value={props.value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={props.loading} onClick={props.onClick} type="primary">
                Add Comment
            </Button>
        </Form.Item>
    </div>
);

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
                <Card className={styles.CommentsCard}>
                <section className={styles.AddComment}>
                    <Comment
                        avatar = {
                            <Avatar>JD</Avatar>
                        }
                        content = {
                            <CommentForm/>
                        }
                    />
                </section>
                <Comments/>
                </Card>
            </section>
        )
    }
}

export default PostDetails;