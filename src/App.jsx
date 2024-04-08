import './App.css'
import { Routes, Route, NavLink } from "react-router-dom"
import RoutesList from './routesList'
import { generatePath } from './utils/generatePath'

function App() {

    return (
        <>
            <header>
                <nav>
                    {RoutesList.map((route, index) => (
                        route.header && (
                            <NavLink
                                className={({ isActive }) => isActive ? 'nav-link-active' : ''}
                                key={index}
                                to={generatePath(route.name)}
                                exact={route.exact}
                            >
                                {route.name}
                            </NavLink>
                        )
                    ))}
                </nav>
            </header>
            <main>
                <Routes>
                    {RoutesList.map((_, index) => (
                        <Route key={index} path={_.path} element={_.component} />
                    ))}
                </Routes>
            </main>
        </>
    )
}

export default App
