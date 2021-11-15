import React from 'react'
import { useSelector } from 'react-redux'
import { Articls } from './Articls'

const ListArticl = () => {
    const addArticl = useSelector(state => state.allArticl.articl)
    console.log(addArticl)
    console.log(typeof(addArticl) )
    return (
        <div>
            { addArticl.map(el=> <Articls key={el} articl={el}/>)}
            
        </div>
    )
}

export default ListArticl
