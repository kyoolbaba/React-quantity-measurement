import React, {useState} from 'react';
function UnitsHook(){
    const[temperature]=useState(['Farenhiet','Celcius','Kelvin'])
    const[length]=useState(['Centimeter','Millimeter','Inch','Foot','Kilometer','Yard'])
    const[volume]=useState(['Liter','Milliliter','Gallon'])

    return [temperature, length, volume]
}
export default UnitsHook;
