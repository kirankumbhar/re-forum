import React from 'react';

import { List, Icon, Avatar } from 'antd';


const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

const post = (props) => {
    return (
        <List.Item
            key={props.id}
            actions={[
                <IconText type="like-o" text={(Math.random()*100).toFixed(0).toString()} />,
                <IconText type="message" text={(Math.random()*10).toFixed(0).toString()} />
            ]}
        >
            <h3>{props.title}</h3>
            <List.Item.Meta
                avatar={
                    <Avatar src="https://zos.https://moorehumane.org/wp-content/uploads/2016/06/avatar-male.jpg" />
                }
                title={props.author}

            />
            <div>{props.description}</div>
        </List.Item>
    )
}

export default post;