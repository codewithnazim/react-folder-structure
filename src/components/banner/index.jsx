import { Box, Container, Grid, Typography, Button } from '@mui/material'
import React from 'react'
import useStyles from './style';
import {Section1} from './section1';
import {Section2} from './section2';

export const Banner = () => {
    const classes = useStyles();
    return (
        <Box className='banner'  >
            <Container fixed sx={{padding:'100px auto', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center',}} >
               <Section1 />
               <Section2 />
            </Container>
        </Box>
    )
}