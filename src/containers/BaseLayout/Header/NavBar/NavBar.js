import React, { Component } from 'react';
import { ClockCircleOutlined, StarOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

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
                    <ClockCircleOutlined />
                    Recent
                </Menu.Item>
                <Menu.Item key = "popular">
                    <StarOutlined />
                    Popular
                </Menu.Item>
            </Menu>
        );
    }
}

export default NavBar;