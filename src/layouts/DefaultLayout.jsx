import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
    return <>
        <header>
            <h1>React Context Api</h1>
        </header>
        <Outlet />
        <footer>
            Footer del sito
        </footer>
    </>
}

export default DefaultLayout;