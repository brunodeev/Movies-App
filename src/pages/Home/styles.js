import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #141a29;
    flex: 1;
`;

export const SearchContainer = styled.View`
    flex-direction: row;
    width: 100%;
    height: 50px;
    align-items: center;
    padding: 0 10px;
    margin-bottom: 8px;
`;

export const Input = styled.TextInput`
    background-color: rgba(255, 255, 255, .4);
    height: 50px;
    width: 87%;
    border-radius: 25px;
    padding: 8px 15px;
    font-size: 18px;
    color: #fff;
`;

export const SearchButton = styled.TouchableOpacity`
    width: 13%;
    height: 50px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    padding-top: 20px;
    padding-bottom: 8px;
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
    padding-left: 10px;
    padding-right: 10px;
`;

export const BannerButton = styled.TouchableOpacity``;

export const Banner = styled.Image`
    height: 150px;
    border-radius: 6px;
    margin: 0px 10px;
`;

export const SliderMovie = styled.FlatList`
    height: 250px;
    padding: 0px 10px;
`;