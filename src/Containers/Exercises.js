import React, { Component } from 'react'
import {
    Container,
    ListContainer,
    Button,
    ButtonText,
} from './Styles/Exercises'
import SingleExercise from '../Components/SingleExercise'

export default class Exercises extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises: [],
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
                                    this.setState({ exercises: json });
                                });
                        }}>
                            GET EXERCISES
                        </ButtonText>
                    </Button>
                    {this.state.exercises.map(exercise => (
                        <SingleExercise
                            key={exercise._id}
                            id={exercise._id}
                            username={exercise.username}
                            description={exercise.description}
                            duration={exercise.duration}
                            date={exercise.date}
                        />
                    ))}
                </ListContainer>
            </Container>
        )
    }
}