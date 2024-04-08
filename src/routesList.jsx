import Home from './pages/Home/index.jsx'
import About from './pages/About/index.jsx'
import AddPost from './pages/AddPost/index.jsx'
import PostDetail from './components/PostDetail.jsx'
import Page404 from './pages/Errors/Page404/index.jsx'

const RoutesList = [
    { path: '/', component: <Home />, name: "Home", header: true },
    { path: '/addpost', component: <AddPost />, name: "Add post", header: true },
    { path: '/about', component: <About />, name: "About", header: true },
    { path: '/post/:id', component: <PostDetail />, name: "PostDetail", header: false },
    { path: '*', component: <Page404 />, name: "Error404", header: false },
]

export default RoutesList