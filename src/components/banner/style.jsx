import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin:'30px',
    },
    cardbg: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: '20px',
        gap:'10px'
    },
    btn: { 
        cursor: 'pointer',
        gap:'10px', 
      }
      
}))

export default useStyles
