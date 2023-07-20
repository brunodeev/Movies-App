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
    padding: 45px 14px;
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
    width: 100%;
    height: 350px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

export const Title = styled.Text`
    color: #FFF;
    font-size: 30px;
    font-weight: bold;
    margin-top: 30px;
    margin-left: 14px;
`;