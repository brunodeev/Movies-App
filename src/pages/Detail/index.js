import React, { useState, useEffect } from 'react';
import {
    Container,
    Header,
    HeaderButtom,
    Banner,
    Title,
    ContentArea,
    Rate,
    ListGenres,
} from './styles';

import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import api, { key } from '../../services/api';

import Stars from 'react-native-stars';
import { ScrollView } from 'react-native-gesture-handler';
import Genres from '../../components/Genres';

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

    var rate = movie.vote_average;
    rate = Number.parseFloat(rate).toFixed(1);

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

            <ScrollView>
            <Banner
            resizeMode='contain'
            source={{ uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }}
            />
            <Title numberOfLines={2}>{movie.title}</Title>

            <ContentArea>
                <Stars
                default={movie.vote_average}
                count={10}
                enableHalfStar={true}
                starSize={20}
                fullStar={<Ionicons name='md-star' size={20} color='#E7A74e'/>}
                emptyStar={<Ionicons name='md-star-outline' size={20} color='#E7A74e'/>}
                halfStar={<Ionicons name='md-star-half' size={20} color='#E7A74e'/>}
                disabled={true}
                />
                <Rate>{rate}/10</Rate>
            </ContentArea>

            <ListGenres
                data={movie?.genres}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <Genres data={item}/>}
            />

            </ScrollView>
        </Container>
    );
}

export default Detail;