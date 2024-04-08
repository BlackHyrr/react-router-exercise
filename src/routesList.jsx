import Home from './pages/home/home.jsx'
import About from './pages/about/about.jsx'

const RoutesList = [
    { path: '/', component: <Home/> ,name: "Home" },
    { path: '/about', component: <About/>, name: "About" },
]

export default RoutesList