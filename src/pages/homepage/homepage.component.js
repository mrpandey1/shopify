import React from 'react';
import Directory from '../../components/directory/directory.component';
import SliderComponent from '../../components/slider/slider.component';
import { HomePageContainer } from './homepage.styles';

const HomePage = ({ history }) => (
    <HomePageContainer>
        <SliderComponent/>
        <Directory/>
    </HomePageContainer>
)

export default HomePage;
