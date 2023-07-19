import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';

import { 
    Container, 
    SearchContainer, 
    Input, SearchButton, 
    Title, BannerButton, 
    Banner,
    SliderMovie
} from './styles';

import Header from '../../components/Header';
import { Feather } from '@expo/vector-icons';
import SliderItem from '../../components/SliderItem';

import api, { key } from '../../services/api';

import { getListMovies } from '../../utils/movie';


function Home(){

    const [nowMovies, setNowMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        let isActive = true;
        const abort = new AbortController();

        async function getMovies(){
            const [nowData, popularData, topData] = await Promise.all([
                api.get('/movie/now_playing', {
                    params: {
                        api_key: key,
                        language: 'pt-BR',
                        page: 1
                    }
                }),
                api.get('/movie/popular', {
                    params: {
                        api_key: key,
                        language: 'pt-BR',
                        page: 1
                    }
                }),
                api.get('/movie/top_rated', {
                    params: {
                        api_key: key,
                        language: 'pt-BR',
                        page: 1
                    }
                })
            ]);

            if(isActive){
                const nowList = getListMovies(10, nowData.data.results);
                const popularList = getListMovies(7, popularData.data.results);
                const topList = getListMovies(3, topData.data.results);

                setNowMovies(nowList);
                setPopularMovies(popularList);
                setTopMovies(topList);

                setLoading(false);
            }

        };

        getMovies();

        return () => {
            isActive = false;
            abort.abort();
        }

    }, []);

    if(loading){
        return (
            <Container>
                <ActivityIndicator size='large' color='#FFF' />
            </Container>
        );
    }

    return(
        <Container>
            <Header title={'React Prime'}/>
            <SearchContainer>
                <Input
                    placeholder='Ex.: Vingadores'
                    placeholderTextColor='#ddd'
                />
                <SearchButton>
                    <Feather name='search' size={28} color='#FFF' />
                </SearchButton>
            </SearchContainer>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Title>Em Cartaz</Title>
                <BannerButton activeOpacity={.9} onPress={() => alert('TESTEEES')}>
                    <Banner
                        resizeMethod='resize'
                        source={{ uri: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=859&q=80' }}
                    />
                </BannerButton>

                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={nowMovies}
                    renderItem={({item}) => <SliderItem data={item} /> }
                    keyExtractor={(item) => String(item.id)}
                />

                <Title>Populares</Title>
                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={popularMovies}
                    renderItem={({item}) => <SliderItem data={item} /> }
                    keyExtractor={(item) => String(item.id)}
                />

                <Title>Mais Votados</Title>
                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={topMovies}
                    renderItem={({item}) => <SliderItem data={item} /> }
                    keyExtractor={(item) => String(item.id)}
                />

            </ScrollView>
        </Container>
    )
}

export default Home;