import React from 'react'
import { Box, Container, Grid, Typography, Button, Stack, Divider } from '@mui/material'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';


export const Banner = () => {
    return (
        <>
            <Box className='home_banner'>
                <Container fixed  >
                    <Grid
                        container
                        spacing={0}
                        direction="row"
                        justifyContent="space-around"
                        alignItems="flex-end"
                        gap="30px"
                        alignContent="flex-end"
                        sx={{ padding: '100px 0 0 0', flexWrap: 'wrap-reverse' }}
                    >
                        <Grid item xl='4' md="4" xs="12" >
                        <img src={require("../../ui/assets/banner/beautiful-female-doctor-white-coat-standing-arms-crossed-white-wall 1 (1).png")}  alt="" style={{ width: '100%' }} />
                        </Grid>
                        <Grid item xl='6' md="6" xs="12">
                            <Box sx={{ padding: { md: '0 20px ', xs: 'auto' } }}>
                                <Typography variant="h1" color="inital" >
                                    <span style={{ color: "#1E5DBB", }}>Protect</span> your health <br />
                                    <img src={require("../../ui/assets/banner/Vector 1.png")} alt="" />   and take care
                                    of <br />your <span style={{ color: "#1E5DBB", }}>health</span>
                                </Typography>
                                <br /><br />
                                <Typography variant="body1" >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet gravida vitae nibh. Velit vehicula scelerisque tristique scelerisque tellus risus.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet gravida vitae nibh. Velit vehicula scelerisque tristique scelerisque tellus risus.
                                </Typography>
                                <br /><br />
                                <Button size="large" variant="contained" color="primary" sx={{ borderRadius: '20px' }}>
                                    Get BMW <ArrowForwardIosOutlinedIcon sx={{ marginLeft: '10px' }} />
                                </Button>
                            </Box>
                        </Grid>

                    </Grid>
                </Container>
                <Container fixed sx={{ background: '#fff', boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", borderRadius: '12px' }}>
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        gap="20px"
                        flexWrap="wrap"
                        sx={{ padding: '50px 0', justifyContent: { md: 'space-between', xs: 'center' } }}
                    >
                        <Box sx={{ width: { md: '30%', xs: '100%' }, }}>
                            <Typography variant="h6" color="initial">
                                Emergency Cases
                            </Typography>
                            <br />
                            <Typography variant="body1" color="initial">
                                Lorem ipsum dolor sit amet, consecr adipiscing elit.
                            </Typography>
                            <br />
                            <Typography variant="h5" color="initial">
                                +91 (731) 253-41-24
                            </Typography>
                        </Box>

                        <Box sx={{ width: { md: '30%', xs: '100%' }, }}>
                            <Typography variant="h6" color="initial">
                                Location
                            </Typography>
                            <br />
                            <Typography variant="body1" color="initial">
                                Lorem ipsum dolor sit amet, consecr adipiscing elit.
                            </Typography>
                            <br />
                            <Typography variant="body1" fontWeight="bold" color="initial">
                                335, Jawahar Marg, Madhav Mandir Complex, Indore
                            </Typography>
                        </Box>

                        <Box sx={{ width: { md: '30%', xs: '100%' }, }}>
                            <Typography variant="h6" color="initial">
                                Opening Hours
                            </Typography>
                            <br />
                            <Typography variant="body1" fontWeight="bold" color="initial">
                                Monday - Friday
                                8:00 - 10:00 pm
                                <br /><br />
                                Saturday
                                9:00 - 8:00 pm
                                <br /><br />
                                Sunday
                                10:00 - 9:00 pm
                            </Typography>
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </>
    )
}
