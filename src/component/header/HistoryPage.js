import React, { Component ,useContext,useState} from 'react'
import {HistoryContext} from './HistoryContext'

export const  HistoryContent= ()=>{
        const [history,setMovies]=useContext(HistoryContext)
 
        const printHistory=()=>{
            history.forEach(a=>
                {
                    Object.values(a.map(

                    ))
                }
                )
        }

        return (
            <div className="History-Page">
                
            {
                history.map((e)=>{
                    return    <div className="History-table"  >
                     <div className='History-content'  >{e.MainUnit} </div>
                    <div className='History-content'   >{e.fromUnit}</div>
                    <div className='History-content'  >{e.quantity}</div>
                    <div className='History-content' >{e.toUnit}</div>
                    </div>
                })
               
                }
            </div>
        )
    
}
