import { Typography } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartPage = ({ productsInCart }: Props) => {
    return (
        <div>
            <Typography
                variant="h4"
                component="h4"
                sx={{
                    marginBottom: '30px',
                }}
            >
                Cart
            </Typography>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartPage
