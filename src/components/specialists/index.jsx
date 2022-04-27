import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import Slider from "react-slick";
import useStyles from './style';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const Specialists = () => {
    const classes = useStyles()
    return (
        <>
            <Container fixed sx={{ padding: "100px" }}>
                <Box display='flex' justifyContent='space-between'>
                    <Typography variant='h2'>
                        Critical Care Specialists
                    </Typography>
                    <Button className={classes.btn}>
                        View all
                        <ArrowForwardIosIcon />
                    </Button>
                </Box>
                <Box className={classes.cardback} >
                    {data.map((item, index) =>
                        <Box key={index} className={classes.card}>
                            <Box className={classes.cardbg}>
                                <Typography variant='h5'>
                                    {item.title}
                                </Typography>
                                <Typography variant='h6' color='#231F208A'>
                                    {item.subtitle}
                                </Typography>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Container>
        </>
    )
}


const data = [
    {
        title: 'Dr. Nirav Parmar MBBS',
        subtitle: '- Physician'
    },
    {
        title: 'Dr. Vishal Parmar MBBS',
        subtitle: '- Physician'
    },
    {
        title: 'Dr. Vipul Sharma MBBS',
        subtitle: '- Physician'
    },
    {
        title: 'Dr. Nirav Parmar MBBS',
        subtitle: '- Physician'
    },
]