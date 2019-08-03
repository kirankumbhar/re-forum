import React from 'react';
import { Icon, Avatar } from 'antd'

import classes from './RightMenu.module.css';

const rightMenu = (props) => (
    <div className={classes.RightMenu}>
        <Icon className={classes.BellIcon} type="bell" />
        <Avatar className={classes.Avatar}>
            {props.username}
        </Avatar>
    </div>
);

export default rightMenu;