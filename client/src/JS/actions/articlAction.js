import {GET_ARTICL_SUCCESS,GET_ARTICL_FAIL, LOAD_ARTICL,ADD_ARTICL_FAIL,ADD_ARTICL_SUCCESS,CURRENT_ARTICL} from '../constants/articlConst'

import axios from "axios"
export const getArticls = ()=> async( dispatch)=>{
dispatch({type:LOAD_ARTICL })
try {
    const opts = {
        headers:
            { Authorization: localStorage.getItem("token") }
    }
    const result=await axios.get('/article/allarticls',opts)
    dispatch({type:GET_ARTICL_SUCCESS, payload: result.data})
} catch (error) {
    dispatch({type:GET_ARTICL_FAIL,error })
}
}
export const addArticl= (newArticl,history)=> async(dispatch)=>{
    dispatch({type:LOAD_ARTICL })

    try {
        const opts = {
            headers:
                { Authorization: localStorage.getItem("token") }
        }
        const result=await axios.post('/article/add',newArticl,opts)
       console.log(result)
        dispatch({type:ADD_ARTICL_SUCCESS, payload: result.data})
        history.push("/dashboard")
        dispatch(getArticls())
        
        
    } catch (error) {
        dispatch({type:ADD_ARTICL_FAIL,error  })
    
}}
export const currentArticl = () => async dispatch => {
    dispatch({ type: LOAD_ARTICL })
    try {
        const opts = {
            headers:
                { Authorization: localStorage.getItem("token") }
        }
        const response = await axios.get("/articl/current", opts)
        dispatch({ type: CURRENT_ARTICL, payload: response.data.user })

    } catch (error) {
        dispatch({ type: GET_ARTICL_FAIL, payload: error.response.data })
    }}