type ProductProps = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const productsArray: ProductProps[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 1500,
        image:'/image/iphone-black.webp',
    },

    {
        id: 2,
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        type: 'phone',
        capacity: '128',
        price: 1200,
        image:'/image/iphone-silver.webp',
    },

    {
        id: 3,
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        type: 'phone',
        capacity: '512',
        price: 1000,
        image:'/image/iphone-white.webp',
    },

    {
        id: 4,
        title: 'iPhone 11 Pro',
        description: 'This is iPhone 11 Pro',
        type: 'phone',
        capacity: '128',
        price: 500,
        image:'/image/iphone-red.webp',
    },
    {
        id: 5,
        title: 'iPhone 8 plus',
        description: 'This 8 plus',
        type: 'phone',
        capacity: '256',
        price: 500,
        image:'/image/iphone-blur.webp',
    },
    {
        id: 6,
        title: 'iPhone X',
        description: 'This is iPhone X',
        type: 'phone',
        capacity: '64',
        price: 500,
        image:'/image/iphone-violet.webp',
    },
]

export default productsArray
