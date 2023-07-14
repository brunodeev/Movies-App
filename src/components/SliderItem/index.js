import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import { Container, BannerItem, Title, RateContainer, Rate } from './styles';

function SliderItem(){
    return(
        <Container activeOpacity={.8}>
            <BannerItem source={{ uri: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=859&q=80' }} />

            <Title numberOfLines={1}>Os Vingadores: Era de Ultron</Title>
            <RateContainer>
                <Ionicons name='md-star' color='#E7A74e' />
                <Rate>9/10</Rate>
            </RateContainer>
        </Container>
    )
}

export default SliderItem