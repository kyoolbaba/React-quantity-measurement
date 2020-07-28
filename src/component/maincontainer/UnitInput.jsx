import React,{useState,useEffect} from 'react';
import UnitHook from './UnitsHook.jsx'
import UH from './Unit'
import Select from 'react-select';
import axios from 'axios'
const baseUrl="http://localhost:8080/api/quantitymeasurement/convert/"
const UnitInput=(props)=>{
    const[temperature]=useState(['Farenhiet','Celcius','Kelvin'])
    const[length]=useState(['Centimeter','Millimeter','Inch','Foot','Kilometer','Yard'])
    const[volume]=useState(['Liter','Milliliter','Gallon'])
    const[units]=useState([length,temperature,volume])
    const[firstoption,updateFirstOption]=useState(1)
    const[secondoption,updateSecondOption]=useState(2)
    const[data,setData]=useState(props.unitindex)
    const[quantity,setQuantity]=useState(0)
    const[unitIn,setUnitIn]=useState("CENTIMETER")
    const[unitOut,setUnitOut]=useState("CENTIMETER")
    const[quantityOut,setQuantityOut]=useState(0);
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
        

    useEffect(()=>{

        axios.get(`${baseUrl}${unitIn}/${quantity}/${unitOut}`).then(res=>
            {
                console.log(res)
                setQuantityOut(res.data)      
            }
            )

        }
        
    )

    const handleValueChange=(e)=>{
        setQuantity(e.target.value)
        console.log("Im Getting called")
        console.log(`${baseUrl}${unitIn}/${quantity}/${unitOut}`)
  
    }

    const handleUnitInChange=(e)=>{
        setUnitIn(e.target.value.toUpperCase())
        
        axios.get(`${baseUrl}${unitIn}/${quantity}/${unitOut}`).then(res=>
            {
                console.log(res)
                setQuantityOut(res.data)      
            }
            )
    }

    const handleUnitOutChange=(e)=>{
        setUnitOut(e.target.value.toUpperCase())
        
        axios.get(`${baseUrl}${unitIn}/${quantity}/${unitOut}`).then(res=>
            {
                console.log(res)
                setQuantityOut(res.data)      
            }
            )
    }


    return(
        
        <div className="UnitInput">
        <div className="UnitInput-From">
        <div className="from">From</div>
        <input type="number" onChange={handleValueChange} value={quantity}  />
           <div className="UnitDiv-from" >
            <select className="UnitSelectTag" onChange={handleUnitInChange}   >
            {units[props.unitindex].map(
                (unit,index)=>{
                    let select=""
                    if(index==={firstoption}){
                         select="selected"
                    }
                  return   <option  style={{selected:{select}}}  className="UnitOptionTag"  value={unit}>{unit}</option>
                 } 
            )}
            </select>
        </div>
        </div>
        <div className="UnitInput-To">
        <div className="to">To</div>
        <input type="number" value={quantityOut} />
        <div className="UnitDiv-to" >
        <select className="UnitSelectTag" onChange={handleUnitOutChange} >
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