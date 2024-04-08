import Home from './pages/Home/index.jsx'
import About from './pages/About/index.jsx'
import AddPost from './pages/AddPost/index.jsx'

const RoutesList = [
    { path: '/', component: <Home/> ,name: "Home" },
    { path: '/addpost', component: <AddPost/>, name: "Add post" },
    { path: '/about', component: <About/>, name: "About" },
]

export default RoutesList