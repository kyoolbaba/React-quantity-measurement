import React,{useState,useEffect} from 'react';
import UnitHook from './UnitsHook.jsx'
import UH from './Unit'
const UnitInput=(props)=>{
    const[temperature]=useState(['Farenhiet','Celcius','Kelvin'])
    const[length]=useState(['Centimeter','Millimeter','Inch','Foot','Kilometer','Yard'])
    const[volume]=useState(['Liter','Milliliter','Gallon'])
    const[units]=useState([length,temperature,volume])
    const[firstoption,updateFirstOption]=useState(1)
    const[secondoption,updateSecondOption]=useState(2)

    // const disableUnit=(e)=>{
    //     e.target.value
    // }

    // const[u,setu]=UH("");
    return(
        <div className="UnitInput">
        <div className="UnitInput-From">
        <div className="from">From</div>
        <input type="text" />
           <div className="UnitDiv-from" >
            <select className="UnitSelectTag"  >
            {units[props.unitindex].map(
                (unit,index)=>{
                    let select=""
                    if(index==={firstoption}){
                         select="selected"
                    }
                  return   <option  Style={{selected:{select}}}  className="UnitOptionTag" value={index}>{unit}</option>
                 } 
            )}
            </select>
        </div>
        </div>
        <div className="UnitInput-To">
        <div className="to">To</div>
        <input type="text"/>
        <div className="UnitDiv-to" >
        <select className="UnitSelectTag"  >
        {units[props.unitindex].map(
            (unit,index)=>{
                let select=""
                if(index==={secondoption}){
                     select="selected"
                }
              return   <option value={index}  Style={{selected:{select}}} className="UnitOptionTag" >{unit}</option>
             } 
        )}
        </select>
    </div>
        </div>
        </div>
    )
}

export default UnitInput;