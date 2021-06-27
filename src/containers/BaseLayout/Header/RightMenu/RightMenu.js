import React from 'react';
import { withRouter } from 'react-router-dom'
import { Icon, Avatar, Button } from 'antd'
import { connect } from 'react-redux';

import classes from './RightMenu.module.css';
import { getUsernameInitials } from '../../../../utils';
import * as actions from "../../../../store/actions/auth";

const rightMenu = (props) => (
    <div className={classes.RightMenu}>
        <Button onClick={() => props.history.push('/post/create')} type="primary">Create a Topic</Button>
        <Icon className={classes.BellIcon} type="bell" />
        <Avatar className={classes.Avatar}>
            {getUsernameInitials(props.username)}
        </Avatar>
        <Icon onClick={() => props.onLogout()} className={classes.BellIcon} type="logout" />
    </div>
);

const mapDisptachToProps = (dispatch) => {

    return {
        onLogout: () => dispatch(actions.logOut())
    }
}

export default connect(null, mapDisptachToProps)(withRouter(rightMenu));