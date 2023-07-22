import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #191a30;
`;

export const Header = styled.View`
    z-index: 99;
    display: flex;
    position: absolute;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 45px 10px;
`;

export const HeaderButtom = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: rgba(25, 26, 48, .6);
    height: 35px;
    width: 35px;
    border-radius: 20px;
`;

export const Banner = styled.Image`
    margin-top: -220px;
    width: 100%;
    height: 620px;
    border-radius: 40px;
`;

export const Title = styled.Text`
    color: #FFF;
    font-size: 30px;
    font-weight: bold;
    margin-top: 30px;
    margin-left: 10px;
    margin-bottom: 10px;
`;

export const ContentArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
`;

export const Rate = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #fff;
`;

export const ListGenres = styled.FlatList`
    padding-left: 10px;
    margin: 12px 0;
    max-height: 30px;
    min-height: 30px;
`;

export const Description = styled.Text`
    font-size: 16px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 30px;
    color: #fff;
    line-height: 20px;
`;