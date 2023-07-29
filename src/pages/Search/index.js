import React, { useState, useEffect } from 'react';
import {
    Container,
    ListMovies,
} from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import api, { key } from '../../services/api';

function Search(){

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();
    const route = useRoute();

    if(loading){
        return(
            <Container>

            </Container>
        );
    }

    useEffect(() => {
        let isActive = true;

        async function getSearchMovie(){
            const response = await api.get('/search/movie', {
                params: {
                    query: route?.params?.name,
                    api_key: key,
                    language: 'pt-BR',
                    page: 1,
                }
            });

            if(isActive){
                setMovies(response.data.results);
                console.log(response.data.results);
                setLoading(false);
            }
        };

        if(isActive){
            getSearchMovie();
        }

        return() => {
            isActive = false;
        };
    }, []);

    return (
        <Container>
            <ListMovies/>
        </Container>
    );
}

export default Search