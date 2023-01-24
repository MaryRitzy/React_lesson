import React from 'react'
import ReactDOM from 'react-dom/client'

//jsx  Title > h1
//Content => div > p * 2

const Title = () => {
    return <h1>Hello App.js</h1>
}
const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                asperiores eligendi, non nostrum recusandae assumenda vel velit
                iste veniam ipsa, a nesciunt possimus fugiat laboriosam
                cupiditate enim, provident quod blanditiis.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis quis voluptates totam placeat voluptatum aut itaque
                autem enim, nulla dolorum sunt odit necessitatibus eligendi,
                voluptatibus ducimus, illo in reprehenderit non!
            </p>
        </React.Fragment>
    )
}

function App() {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
