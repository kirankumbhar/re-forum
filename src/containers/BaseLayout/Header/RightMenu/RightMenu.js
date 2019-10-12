import React from 'react';
import {withRouter} from 'react-router-dom'
import { Icon, Avatar, Button } from 'antd'

import classes from './RightMenu.module.css';

const rightMenu = (props) => (
    <div className={classes.RightMenu}>
        <Button onClick={() => props.history.push('/post/create')} type="primary">Create a Topic</Button>
        <Icon className={classes.BellIcon} type="bell" />
        <Avatar className={classes.Avatar}>
            {props.username}
        </Avatar>
    </div>
);

export default withRouter(rightMenu);