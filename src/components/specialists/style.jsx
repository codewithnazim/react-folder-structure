import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    cardback: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        margin:'30px'
    },
    card: {
        width: '270px',
        height: '121px',
        borderRadius: '10px',
        backgroundColor: '#05040505',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin:'10px'
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
        padding:'5px 10px', 
        gap:'10px', 
      }
}))

export default useStyles
