import React, { Component } from 'react'
import {
    Container,
    TextRow
} from './Styles/SingleExercise'

export default class SingleExercise extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <TextRow>_id: {this.props.id} </TextRow>
                <TextRow>username: {this.props.username} </TextRow>
                <TextRow>description: {this.props.description} </TextRow>
                <TextRow>duration: {this.props.duration} </TextRow>
                <TextRow>date: {this.props.date} </TextRow>
            </Container>
        )
    }
}