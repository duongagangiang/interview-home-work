import REST_API from '../utils/API'
import { LOGIN } from '../constants/endpoints'
import * as ActionTypes from './types'

export const startLogin = () => ({
    type: ActionTypes.START_LOGIN
})

export const processLogin = (userInfo) => ({
    type: ActionTypes.PROCESS_LOGIN,
    payload: userInfo
}) 

export const endLogin = (error) => ({
    type: ActionTypes.END_LOGIN,
    payload: error
})

export const login = (user, done) => async (dispatch) => {
    try {
        dispatch(startLogin())
        const results = await REST_API.post(LOGIN, user)
        const token = results.data.token
        localStorage.setItem('token', token)
        dispatch(processLogin(results.data.userInformation))
        done('/')
    } catch (error) {
        dispatch(endLogin(error))
    }
}