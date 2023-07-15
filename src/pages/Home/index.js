import React from 'react';
import { ScrollView } from 'react-native';

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
import SliderItem from '../../components/SliderItem'


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
                    data={[1, 3, 3, 3, 4]}
                    renderItem={({item}) => <SliderItem/> }
                />

                <Title>Populares</Title>
                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 3, 3, 3, 4]}
                    renderItem={({item}) => <SliderItem/> }
                />

                <Title>Mais Votados</Title>
                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 3, 3, 3, 4]}
                    renderItem={({item}) => <SliderItem/> }
                />

            </ScrollView>
        </Container>
    )
}

export default Home;