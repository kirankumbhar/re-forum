import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

import classes from './NavBar.module.css';

class NavBar extends Component {
    state = {
        current: 'mail',
    };

    onClickHandler = (event) => {
        this.setState({
            current: event.key,
        });
    };

    render() {
        return (
            <Menu className={classes.Menu} onClick = {this.onClickHandler} mode = "horizontal">
                <Menu.Item key = "recent">
                    <Icon type="clock-circle" />
                    Recent
                </Menu.Item>
                <Menu.Item key = "popular">
                    <Icon type="star" />
                    Popular
                </Menu.Item>
            </Menu>
        );
    }
}

export default NavBar;