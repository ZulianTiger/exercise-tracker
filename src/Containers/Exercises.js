import React, { Component } from 'react'
import {
    Container,
    ListContainer,
    Button,
    ButtonText,
} from './Styles/Exercises'

export default class Exercises extends Component {
    constructor(props){
        super(props);
        this.state = {
            exercises: null,
        }
    }

    render() {
        return (
            <Container>
                <ListContainer>
                    <Button>
                        <ButtonText onClick={() => {
                            fetch('http://localhost:5000/exercises', {
                                method: 'GET'
                            })
                                .then(res => res.json())
                                .then(json => {
                                    this.setState({exercises: json});
                                });
                        }}>
                            GET EXERCISES
                        </ButtonText>
                    </Button>
                    Exercises list: {JSON.stringify(this.state.exercises)}
                </ListContainer>
            </Container>
        )
    }
}