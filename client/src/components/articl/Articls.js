import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArticls } from '../../JS/actions/articlAction'
import './Articls.css'
export const Articls = ({articl}) =>{
   
    const dispatch = useDispatch()
    useEffect(() => {
     dispatch(getArticls())
    }, [])
    return (
        <div className="article">


      <div className="content_bg_grigio">
        <div className="col-md-8-fake">
          <div className="post_wrapper">
          
            </div>
          </div>
          <div className="post_wrapper">
            <div className="header_wrapper">
            
            </div>
            <div className="content_text">
              <p className="title">{articl.title} </p>
              <p className="subtitle"></p>
              <div className="line_separator" />
              <span className="date"></span> 
             
            </div>
          </div>
        </div>
      </div>
     
  
    
    );
  }

       
    
   
