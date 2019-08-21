import React, { Component } from 'react';
import { Icon, Skeleton, Card, Avatar } from 'antd';

import axios from '../../axios';

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
     let post = (
         <Card
         style={{ width: 600, marginTop: 16 }}
         actions={[
             <Icon type="setting" key="setting" />,
             <Icon type="edit" key="edit" />
            ]}
            >
        <Skeleton loading={this.state.loading} avatar active>
            <h2>{this.state.loading === false ? this.state.postData.title : null}</h2>
          <Meta
            avatar={
                <Avatar>JD</Avatar>
            }
            title={this.state.loading === false ? this.state.postData.author : null}
            />
          <p>{this.state.loading === false ? this.state.postData.description : null}</p>
        </Skeleton>
      </Card>
     )
     if (this.state.postData) {
        }
        if (this.state.error) {
            post = <p> There was some problem loading Topic. Please try again later! </p>
     }
     return (<section>
         {post}
     </section>)
 }
}

export default PostDetails;