import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
import Home from 'pages/Home/Home'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Container } from '@mui/system'
import CartPage from 'pages/Cart/CartPage'

type Props = {}

type ProductsInCart = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
        1: 5,
        2: 5,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState) => {
            let prevProductsInCart = { ...prevState }
            delete prevProductsInCart[id]
            return prevProductsInCart
        })
    }

    /* const removeProductFromCart = (id: number) => {
        let prevProductsInCart = { ...productsInCart }
        delete prevProductsInCart[id]
        setProductsInCart(prevProductsInCart)
    } варіант запису але не зовсим точно може працювати*/

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <button onClickCapture={() => removeProductFromCart(1)}>
                Delete product
            </button>
            <Container sx={{ padding: '60px 0' }}>
                <Routes>
                    <Route
                        path="/"
                        element={<Home addProductToCart={addProductToCart} />}
                    />
                    <Route
                        path="cart"
                        element={<CartPage productsInCart={productsInCart} />}
                    />
                </Routes>
            </Container>

            <Footer />
        </StyledEngineProvider>
    )
}

export default App
