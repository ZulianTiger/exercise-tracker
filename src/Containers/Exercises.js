import React, { Component } from 'react'
import {
    Container,
    ListContainer,
    Button,
    ButtonText,
} from './Styles/Exercises'

export default class Exercises extends Component {

    render() {
        return (
            <Container>
                <ListContainer>
                    <Button>
                        <ButtonText onClick={() => {
                            console.log('test');
                        }}>
                            GET EXERCISES
                        </ButtonText>
                    </Button>
                </ListContainer>
            </Container>
        )
    }
}