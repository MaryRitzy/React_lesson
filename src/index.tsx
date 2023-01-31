import React from 'react'
import ReactDOM from 'react-dom/client'
import { Content } from './Content'
import Title from './Title'

//jsx  Title > h1
//Content => div > p * 2

function App() {
    return (
        <>
            <Title text="React" />
            <Title text="TS" />
            <Content text1="Hello world1" text2="Hello world2" year={2023} />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
