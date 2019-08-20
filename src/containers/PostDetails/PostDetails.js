import React, { Component } from 'react';
import { Icon } from 'antd';

import axios from '../../axios';

class PostDetails extends Component {
    state = {
        postData: null,
        error: false
    }

    componentDidMount() {
        axios.get('/posts/'+ this.props.match.params.id + '.json').then(response => {
            this.setState({
                ...this.state,
                postData: response.data,
                error: false
            });
        }).catch(error => {
            
            this.setState({
                ...this.state,
                error: true
            });
        });
        
    }
 render() {
     let post = <Icon type="loading" />;
     if (this.state.postData) {
         post = <p> Post loaded! </p>
     }
     if (this.state.error) {
         post = <p> There was some error while loading post! </p>
     }
     return (<section>
         {post}
     </section>)
 }
}

export default PostDetails;