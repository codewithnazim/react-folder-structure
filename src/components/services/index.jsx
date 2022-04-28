import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Slider from "react-slick";

export const Services = () => {
    return (
        <Box className='services' sx={{ display: 'flex', flexDirection: 'column', marginY:{xs:'50px', md:'100px'}, justifyContent:'center', alignItems:'center' }}>
            <Container fixed sx={{ padding: { xs: '50px auto', md: "100px auto" }, display: 'flex', flexDirection: 'column', marginY:{xs:'50px', md:'100px'}, justifyContent:'center' }}>
                <Box display='flex'>
                <Typography variant='h2' color='#fff'>
                    Services
                </Typography>
                </Box>
                <Grid container mt='50px'>
                    {data.map((item, index) =>
                        <Grid key={index} item  sm={5} md={4} lg={3}  >
                            <Box   sx={{ display: 'flex',borderRadius: '10px', padding:'5px' , alignItems: 'center', margin: '10px', bgcolor:'#fff' }}>

                            <Box margin='20px' sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
                        </Grid>
                    )}
                </Grid>
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