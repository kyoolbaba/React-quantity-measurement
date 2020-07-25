import React,{useState,useEffect} from 'react';
import UnitHook from './UnitsHook.jsx'
import UH from './Unit'
import Select from 'react-select';
const UnitInput=(props)=>{
    const[temperature]=useState(['Farenhiet','Celcius','Kelvin'])
    const[length]=useState(['Centimeter','Millimeter','Inch','Foot','Kilometer','Yard'])
    const[volume]=useState(['Liter','Milliliter','Gallon'])
    const[units]=useState([length,temperature,volume])
    const[firstoption,updateFirstOption]=useState(1)
    const[secondoption,updateSecondOption]=useState(2)
    const[data,setData]=useState()
    // const disableUnit=(e)=>{
    //     e.target.value
    // }

    // const[u,setu]=UH("");

    // useEffect(()=>{
    //     const datatook=[];
    //     units[props.unitindex].map((e)=>{
    //         datatook.push({value:e,label:e})
    //     }
    //     )
    //     setData(datatook)
    //     console.log(datatook)
    // })
        

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
                  return   <option  Style={{selected:{select}}}  className="UnitOptionTag" value={unit}>{unit}</option>
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
                let disable=''
                if(index==={secondoption}){
                     select="selected"
                }
                if(index==={firstoption}){
                    disable='disabled'
                }
              return   <option value={unit} isOptionDisabled={true}  className="UnitOptionTag" >{unit}</option>
             } 
        )}
        </select>

       

    </div>
        </div>
        </div>
    )
}

export default UnitInput;


// <Select
// option={data}
// />