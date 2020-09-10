import React from 'react';
import Container from '@material-ui/core/Container';
import SurveyComp from './Presentation/SurveyComp';
import BrandHeading from '../../molecules/BrandHeading';

export default function SurveyComponent(props) {
    return (
        <Container>
            <BrandHeading />
            <SurveyComp />
        </Container>
    );
}
