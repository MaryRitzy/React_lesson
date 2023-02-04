import logo from 'assets/logo.svg'
import Typography from '@mui/material/Typography'

type Props = {}
const Logo = (props: Props) => {
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="Fake shop" />
        </Typography>
    )
}
export default Logo