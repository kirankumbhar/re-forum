import React from 'react';
import { Icon, Avatar, Button } from 'antd'

import classes from './RightMenu.module.css';

const rightMenu = (props) => (
    <div className={classes.RightMenu}>
        <Button type="primary">Create a Topic</Button>
        <Icon className={classes.BellIcon} type="bell" />
        <Avatar className={classes.Avatar}>
            {props.username}
        </Avatar>
    </div>
);

export default rightMenu;