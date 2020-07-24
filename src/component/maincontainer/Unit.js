import {useState} from 'react';
import UnitHook from './UnitsHook.jsx'
 export default initialvalue => {
    const[unit,setUnit]=useState(0);
    const[temp,length,volume]=useState(UnitHook);
    // const sendSubUnits=[length,temp,volume]

    function setUnitHanlder(n){
        console.log("Printing from Unit.jsx")
        setUnit(n)
    }

    return [unit,setUnitHanlder ];
}