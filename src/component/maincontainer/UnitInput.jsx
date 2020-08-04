import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios'
import services from '../../services/services'
import {HistoryContext} from '../header/HistoryContext'

const baseUrl="http://localhost:8080/api/quantitymeasurement/convert/"


const UnitInput=(props)=>{
     const {history,updateHistory}=useContext(HistoryContext)
    const[temperature]=useState(['Fahrenhiet','Celcius','Kelvin'])
    const[length]=useState(['Centimeter','Inch','Foot','Yard'])
    const[volume]=useState(['Liter','Milliliter','Gallon'])
    const[mainUnits]=useState(['Length','Temperature','Volume'])
    const[units]=useState([length,temperature,volume])
    const[firstoption,updateFirstOption]=useState(units[props.unitindex][0])
    const[secondoption,updateSecondOption]=useState(units[props.unitindex][1])
    const[data,setData]=useState(props.unitindex)
    const[dataprev,setDataPrev]=useState(0)
    const[quantity,setQuantity]=useState(0)
    const[unitIn,setUnitIn]=useState("CENTIMETER")
    const[unitOut,setUnitOut]=useState("CENTIMETER")
    const[quantityOut,setQuantityOut]=useState(0);
    const unitInRef=React.useRef();
    const unitOutRef=React.useRef();
    const inputValue=React.useRef();

        

    useEffect(()=>{
        if(dataprev!==data){
           firstoption=units[0]
           secondoption=units[1]
           setData(data)
           setUnitIn(unitInRef.current.value.toUpperCase())
           setUnitOut(unitOutRef.current.value.toUpperCase())
           inputValue.target.value=0;
           console.log(inputValue)
        }else{
            setUnitIn(unitInRef.current.value.toUpperCase())
            setUnitOut(unitOutRef.current.value.toUpperCase())
        }

        services.getData(baseUrl,unitIn,quantity,unitOut).then((res)=>{
            console.log(res)
            setQuantityOut(res.data) 
        })
        axios.get(`${baseUrl}${unitIn}/${quantity}/${unitOut}`).then(res=>
            {
                console.log(res)            
            }
            )
        }
    )

    useEffect(()=>{
console.log(history)
       var histt=[];
       histt=JSON.parse(localStorage.getItem('histt'))||[];
      
        let newvalues={
            MainUnit:mainUnits[props.unitindex],
            fromUnit:unitIn,
            quantity:quantity,
            toUnit:unitOut,
            value:quantityOut
        }
        histt.push(newvalues)
      localStorage.setItem('histt',JSON.stringify(histt))     
    //   let hist1=[]
    //   hist1=JSON.parse(localStorage.getItem('history'))
    //   console.log(JSON.parse(localStorage['history']))
      
    })

    const handleValueChange=(e)=>{
        setQuantity(e.target.value)
        console.log("Im Getting called")
        console.log(`${baseUrl}${unitIn}/${quantity}/${unitOut}`)
    }

    const handleUnitInChange=(e)=>{

        if(e.target.value!==secondoption){
            setUnitIn(e.target.value.toUpperCase())
            updateFirstOption(e.target.value)
        }
        

    }

    const handleUnitOutChange=(e)=>{
        if(e.target.value!==firstoption){
            setUnitOut(e.target.value.toUpperCase())
            updateSecondOption(e.target.value)
        }
    }


    return(
        <div className="UnitInput">
        <div className="UnitInput-From">
        <div className="from">From</div>
        <input type="number" onChange={handleValueChange} ref={inputValue}  value={quantity}  />
           <div className="UnitDiv-from" >
            <select className="UnitSelectTag" ref={unitInRef} value={firstoption}  onChange={handleUnitInChange}   >
            {units[props.unitindex].map(
                (unit,index)=>{
                    // let select=""
                    // if(index==={firstoption}){
                    //      select="selected"
                    // }
                  return   <option   className="UnitOptionTag"  value={unit}>{unit}</option>
                 } 
            )}
            </select>
        </div>
        </div>
        <div className="UnitInput-To">
        <div className="to">To</div>
        <input type="number" value={quantityOut} />
        <div className="UnitDiv-to" >
        <select className="UnitSelectTag" ref={unitOutRef} value={secondoption}  onChange={handleUnitOutChange} >
        {units[props.unitindex].reverse().map(
            (unit,index)=>{
                let select=""
                let disable=''
                // if(index==={secondoption}){
                //      select="selected"
                // }
                // if(index==={firstoption}){
                //   return null;
                // }
                if(unit===firstoption){
                    return   <option value={unit} disabled  isOptionDisabled={true}  className="UnitOptionTag" >{unit}</option>

                }
              return   <option value={unit}  isOptionDisabled={true}  className="UnitOptionTag" >{unit}</option>
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