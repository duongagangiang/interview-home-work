import Dashboard from './components/Dashboard'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import ArticleCreator from "./components/ArticleCreator"
import Details from './components/Details'

const routes = [
    {
        path: '/',
        exact: true,
        component: Dashboard
    },
    {
        path: '/sign-in',
        component: SignIn
    },
    {
        path: '/sign-up',
        component: SignUp
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/:username/posts',
        component: ArticleCreator
    },
    {
        path: '/posts/:id',
        component: Details
    }
]

export default routes
