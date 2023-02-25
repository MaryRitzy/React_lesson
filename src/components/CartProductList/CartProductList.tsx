import productsArray, { getProductsObject, Product } from 'utils/productsArray'
import CartProductListItem from './CartProductListItem'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productObject?: {
        [id: number]: Product
    }
    CartItem?: any
    removeProductFromCart?: (id: number) => void
}

const CartProductList = ({
    productsInCart,
    productObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
    removeProductFromCart,
}: Props) => {
    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productObject[parseInt(productId)]}
                    productCount={productsInCart[parseInt(productId)]}
                    removeProductFromCart={removeProductFromCart}
                />
            ))}
        </>
    )
}
export default CartProductList
