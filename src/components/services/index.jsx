import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Slider from "react-slick";
import { makeStyles } from "@mui/styles";




export const Services = () => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };


    
    return (
        <Box className='services' >
            <Container fixed sx={{ padding: "100px" }}>
                <Typography variant='h2' color='#fff'>
                    Services
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', borderRadius: '10px', alignItems: 'center', }}>
                    {data.map((item, index) =>
                        <Box key={index} bgcolor='#fff' sx={{ display: 'flex', justifyContent: 'flex-start', borderRadius: '10px', width: '270px', height: '281px', alignItems: 'center', margin: '10px' }}>
                            <Box margin='20px' sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <Box bgcolor='#1E5DBB' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', width: '52px', height: '52px', flexDirection: 'column' }} >
                                    {item.img}
                                </Box>
                                <Typography variant='h3' width='90%'>
                                    {item.title}
                                </Typography>
                                <Typography variant='h6' width='100%'>
                                    {item.subtitle}
                                </Typography>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Container>
        </Box>
    )
}


const data = [
    {
        img: <img src={require("../../ui/assets/services/Mask group (1).png")} alt="" />,
        title: 'Emergency room services',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet gravida vitae nibh.'
    },
    {
        img: <img src={require("../../ui/assets/services/Mask group (2).png")} alt="" />,
        title: 'Short-term hospitalization',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet gravida vitae nibh.'
    },
    {
        img: <img src={require("../../ui/assets/services/Mask group (3).png")} alt="" />,
        title: 'General and specialty surgical services',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet gravida vitae nibh.'
    },
    {
        img: <img src={require("../../ui/assets/services/Mask group (4).png")} alt="" />,
        title: 'X-ray/radiology services',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet gravida vitae nibh.'
    },
    {
        img: <img src={require("../../ui/assets/services/Mask group (5).png")} alt="" />,
        title: 'Pediatric specialty care',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet gravida vitae nibh.'
    },
]