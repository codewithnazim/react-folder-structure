import { Typography } from '@mui/material/'
import Container from '@mui/material/Container'
import { useStyles } from './Style';

export default function Index() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.Container} >
        <Typography variant="h1">
          Varly React Folder And Theme Structure
        </Typography>
      </Container>
    </>
  );
}
