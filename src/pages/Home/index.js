import React from 'react';
import { Text } from 'react-native';

import { Container, SearchContainer, Input, SearchButton } from './styles';

import Header from '../../components/Header';
import { Feather } from '@expo/vector-icons';


function Home(){
    return(
        <Container>
            <Header title={'React Prime'}/>
            <SearchContainer>
                <Input
                    placeholder='Ex.: Vingadores'
                />
                <SearchButton>
                    <Feather name='search' size={28} color='#FFF' />
                </SearchButton>
            </SearchContainer>
        </Container>
    )
}

export default Home;