import React,{useState} from 'react';
function UnitsHook(){
    const[temperature,setTemp]=useState(['Farenhiet','Celcius','Kelvin'])
    const[length]=useState(['Centimeter','Millimeter','Inch','Foot','Kilometer','Yard'])
    const[volume]=useState(['Liter','Milliliter','Gallon'])
    const[units]=useState([temperature,length,volume])

    return [temperature, length, volume]
}
export default UnitsHook;
