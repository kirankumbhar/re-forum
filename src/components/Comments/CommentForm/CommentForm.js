import React from 'react';
import { Comment, Avatar, Form, Button, Input } from 'antd'

const { TextArea } = Input;

const commentForm = (props) => {
    return (
        <Comment
            avatar = {
                <Avatar>JD</Avatar>
            }
            content = {
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
            }
        />
    );
}

export default commentForm;