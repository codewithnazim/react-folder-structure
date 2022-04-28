import { Box, Container, Grid, Typography, Button } from '@mui/material'
import React from 'react'
import useStyles from './style';
import { Section1 } from './section1';
import { Section2 } from './section2';

export const Banner = () => {
    const classes = useStyles();
    return (
        <Box className='banner' sx={{dispay:'flex', justifyContent:'center', alignItems:'center', height:'maxContent'}} >
            <Container fixed sx={{  flexWrap:'wrap' , padding:{xs:'50px auto', md:"100px auto"}, }} >
                <Section1 />
                <Section2 />
            </Container>
        </Box>
    )
}