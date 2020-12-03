import React from 'react';
import Directory from '../../components/directory/directory.component';
import SliderComponent from '../../components/slider/slider.component';
import './home.styles.scss';
const HomePage = ({ history }) => (
    <div className='homepage'>
        <SliderComponent/>
        <Directory/>
    </div>
)

export default HomePage;
