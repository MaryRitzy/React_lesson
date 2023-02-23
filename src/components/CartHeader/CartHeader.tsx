import CartTotal from 'components/CartTotal/CartTotal'
import productsArray, { getProductsObject, Product } from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productObject?: {
        [id: number]: Product
    }
}

const CartHeader = ({
    productsInCart,
    productObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            <div>
                {Object.keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productObject[parseInt(productId)].title} :{' '}
                        {productsInCart[parseInt(productId)]}
                    </div>
                ))}
            </div>
            <CartTotal productsInCart={productsInCart}></CartTotal>
        </div>
    )
}
export default CartHeader
