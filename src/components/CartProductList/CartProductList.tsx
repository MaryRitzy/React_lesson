import productsArray, { getProductsObject, Product } from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productObject?: {
        [id: number]: Product
    }
}

const CartProductList = ({
    productsInCart,
    productObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productObject[parseInt(productId)].title} :{' '}
                    {productsInCart[parseInt(productId)]}
                </div>
            ))}
        </div>
    )
}
export default CartProductList
