import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin:'30px',
        height:'274px',
        width:'380px',
    },
    cardbg: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: '40px',
        gap:'10px'
    },
    btn: {
        cursor: 'pointer',
        padding:'5px 10px', 
        gap:'10px', 
      }
}))

export default useStyles
