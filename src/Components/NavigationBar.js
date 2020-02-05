import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    NavigationContainer,
    NavLinkContainer,
    NavLinkText,
} from './Styles/NavigationBar'

export default class NavigationBar extends Component {

    render() {
        return (
            <NavigationContainer>
                <NavLinkContainer>
                    <Link to={'/'}>
                        <NavLinkText>
                            Exercises
                        </NavLinkText>
                    </Link>
                </NavLinkContainer>
                <NavLinkContainer>
                    <Link to={'/users'}>
                        <NavLinkText>
                            Users
                        </NavLinkText>
                    </Link>
                </NavLinkContainer>
            </NavigationContainer>
        )
    }
}