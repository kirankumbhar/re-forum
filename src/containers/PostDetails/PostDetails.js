import React, { Component, Fragment } from 'react';
import { Icon, Skeleton, Card, Avatar } from 'antd';

import axios from '../../axios';
import { getUsernameInitials } from '../../utils';

const { Meta } = Card;

class PostDetails extends Component {
    state = {
        loading: true,
        postData: null,
        error: false
    }

    componentDidMount() {
        axios.get('/posts/'+ this.props.match.params.id + '.json').then(response => {
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
        let post = null;
        if (this.state.postData) {
            post = (
            <Fragment><h2>{this.state.postData.title}</h2>
                <Meta
                    avatar={
                        <Avatar>{getUsernameInitials(this.state.postData.author)}</Avatar>
                    }
                    title={this.state.postData.author}
                    />
                <p>{this.state.postData.description}</p>
                </Fragment>
            )
        }
        if (this.state.error) {
            post = <p> There was some problem loading Topic. Please try again later! </p>
        }
        return (
            <section>
                <Card style={{ width: 800, marginTop: 16, margin: '0 auto' }}>
                    <Skeleton loading={this.state.loading} avatar active>
                        {post}
                    </Skeleton>
                </Card>
            </section>
        )
    }
}

export default PostDetails;