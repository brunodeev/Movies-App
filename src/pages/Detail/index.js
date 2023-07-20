import React, { useState, useEffect } from 'react';
import {
    Container,
    Header,
    HeaderButtom,
    Banner,
    Title,
} from './styles';

import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import api, { key } from '../../services/api';

function Detail(){

    const navigation = useNavigation();
    const route = useRoute();

    const [movie, setMovie] = useState({});

    useEffect(() => {
        let isActive = true;

        async function getMovie(){
            const response = await api.get(`/movie/${route.params?.id}`, {
                params: {
                    api_key: key,
                    language: 'pt-BR'
                }
            }).catch((error) => {
                alert(error);
            });

            if (isActive){
                setMovie(response.data);
            }
        }

        if(isActive){
            getMovie();
        }

        return () => {
            isActive = false;
        }

    }, []);

    return (
        <Container>
            <Header>
                <HeaderButtom activeOpacity={0.8} onPress={() => {navigation.goBack()}} >
                    <Feather
                        name='arrow-left'
                        size={25}
                        color='#FFF'
                    />
                </HeaderButtom>
                <HeaderButtom>
                    <Ionicons
                        name='bookmark'
                        size={25}
                        color='#FFF'
                    />
                </HeaderButtom>
            </Header>

            <Banner
            resizeMethod='resize'
            source={{ uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }}
            />
            <Title numberOfLines={1}>{movie.title}</Title>
        </Container>
    );
}

export default Detail;