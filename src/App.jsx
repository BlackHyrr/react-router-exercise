import './App.css'
import { Routes, Route, NavLink } from "react-router-dom"
import RoutesList from './routesList'

function App() {

    return (
        <>
            {console.log('ok')}
            {console.log(RoutesList)}
            <header>
                <nav>
                    {RoutesList.map((route, index) => (
                        <NavLink className={({isActive}) => { 
                           return isActive ? 'nav-link-active' : ''
                        }} key={index} to={route.path} exact={route.exact}>
                            {route.name}
                        </NavLink>
                    ))}
                </nav>
            </header>
            <main>
                <Routes>
                    {RoutesList.map((route, index) => (
                        <Route key={index} path={route.path} element={route.component} />
                    ))}
                </Routes>
            </main>
        </>
    )
}

export default App
