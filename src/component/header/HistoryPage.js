import React, { Component ,useContext,useState} from 'react'
import {HistoryContext} from './HistoryContext'

export const  HistoryContent= ()=>{
        const {history,updateHistory}=useContext(HistoryContext)
 
        const printHistory=()=>{
            history.forEach(a=>
                {
                    Object.values(a.map(

                    ))
                }
                )
        }

        const hist=JSON.parse(localStorage.getItem('histt'))

        return (
            <>
              <div className="table-header">
              <div className="table-header-row">Main Unit</div>
              <div className="table-header-row">From Unit</div>
              <div className="table-header-row">To Unit</div>
              <div className="table-header-row">Quantity</div>
              <div className="table-header-row"> Value</div>
              </div> 
            {
                hist.map((e)=>{
                    return    <div className="History-table"  >
                     <div className='History-content'  >{e.MainUnit} </div>
                    <div className='History-content'   >{e.fromUnit}</div>
                    <div className='History-content'   >{e.toUnit}</div>
                    <div className='History-content'  >{e.quantity}</div>
                    <div className='History-content' >{e.value}</div>
                    </div>
                })
               
                }
            </>
        )
    
}
