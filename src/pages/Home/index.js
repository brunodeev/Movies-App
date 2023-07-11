import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';
import Header from '../../components/Header';

function Home(){
    return(
        <Container>
            <Header title={'React Prime'}/>
            <Text>Tela Home</Text>
        </Container>
    )
}

export default Home;