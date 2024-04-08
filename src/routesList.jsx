import Home from './pages/Home/index.jsx'
import About from './pages/About/index.jsx'
import Join from './pages/Join/index.jsx'

const RoutesList = [
    { path: '/', component: <Home/> ,name: "Home" },
    { path: '/join', component: <Join/>, name: "Join" },
    { path: '/about', component: <About/>, name: "About" },
]

export default RoutesList