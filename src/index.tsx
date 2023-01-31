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
            <Content
                text1={
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem ut excepturi, cupiditate nihil, odio cum ipsum id obcaecati sed temporibus a repellendus ullam, dolores commodi eius explicabo laboriosam dolor aspernatur?'
                }
                text2={
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem ut excepturi, cupiditate nihil, odio cum ipsum id obcaecati sed temporibus a repellendus ullam, dolores commodi eius explicabo laboriosam dolor aspernatur?'
                }
                year={2023}
            />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
