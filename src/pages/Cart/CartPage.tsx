import productsArray, { getProductsObject, Product } from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productObject?: {
        [id: number]: Product
    }
}

const CartPage = ({
    productsInCart,
    productObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productObject[parseInt(productId)].title} :{' '}
                    {productsInCart[parseInt(productId)]} :{' '}
                    {productObject[parseInt(productId)].price}
                </div>
            ))}
        </div>
    )
}
export default CartPage
