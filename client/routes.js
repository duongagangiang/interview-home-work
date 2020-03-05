import Dashboard from './components/Dashboard'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import Articles from "./components/Articles"

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
        component: Articles
    }
]

export default routes
