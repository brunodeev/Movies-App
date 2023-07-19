import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import { Container, BannerItem, Title, RateContainer, Rate } from './styles';

function SliderItem({data}){
    return(
        <Container activeOpacity={.8}>
            <BannerItem source={{ uri: `https://image.tmdb.org/t/p/original/${data.poster_path}` }} />

            <Title numberOfLines={1}>{data.title}</Title>
            <RateContainer>
                <Ionicons name='md-star' color='#E7A74e' />
                <Rate>{data.vote_average}/10</Rate>
            </RateContainer>
        </Container>
    )
}

export default SliderItem