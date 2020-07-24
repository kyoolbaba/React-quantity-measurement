import React,{useState,useEffect} from 'react'
import scaleoff from '../../Assets/lengthoff.svg'
import degreeoff from '../../Assets/tempoff.svg'
import degreeon from '../../Assets/tempon.svg'
import scaleon from '../../Assets/lengthon.svg'
import voloff from '../../Assets/volumeoff.svg'
import volon from '../../Assets/volon.svg'
import Unit from './Unit'
const Units =  (props)=>{
    // const[actualUnitPresent,setUnit,sendSubUnits]=useState(Unit);  
    const[imagesof,setImageBack]=useState([scaleoff,degreeoff,voloff]);
    const[imagesupdate,updateImage]=useState([scaleon,degreeoff,voloff]);
    const[imageson]=useState([scaleon,degreeon,volon])
    const[selectedUnit,setSelectedUnit]=useState(0);
    const[unitSelected,updateUnit]=useState('Length');
    const[units]=useState(["Length","Temperature","Volume"])
    const [colorhover]=useState(['#00ff625e','#ff00005b','#0033ff5b'])
    const[color,resetColor]=useState(['#00ff625e     ','#FFFFFF ','#FFFFFF '])
    const[textcolorhover]=useState(['rgb(0, 155, 90)','#ff0000ce','#006eff'])
    const[textcolor]=useState(['rgb(0, 155, 90)',' rgba(85, 85, 85, 0.349)','rgba(85, 85, 85, 0.349)'])
    const[border_color]=useState(['1px solid #00f396d5','1px solid #ff0000ce','1px solid #006eff'])
    const[actual_color]=useState(['none',' none','none'])
 
    // useEffect(() => {
    //      props.setUnit(selectedUnit)
    // })

    function mouseOver(n){
        const arr=[];
        for(let i=0;i<imagesof.length;i++){
         
            if(i===n){
                arr[i]=imageson[i]
            }else{
                arr[i]=imagesupdate[i];
            }
        }
        updateImage(arr);
        actual_color[n]=border_color[n]
        color[n]=colorhover[n]
        textcolor[n]=textcolorhover[n]

    }

    function mouseleave(n){
        const arr=[];
        if(selectedUnit===n){
            return'';
        }
        for(let i=0;i<imagesof.length;i++){
            
            if(i===n){
                arr[i]=imagesof[i]
            }else{
                arr[i]=imagesupdate[i];
            }
        }
        actual_color[n]='rgba(85, 85, 85, 0.349)';
        color[n]='#EEEEEE'
        textcolor[n]='rgba(85, 85, 85, 0.349)'
        updateImage(arr);
    }

  function   click(n){
        const arr=[];
        for(let i=0;i<imagesof.length;i++){
            if(i===n){
                arr[i]=imageson[i]
            }else{
                arr[i]=imagesof[i];
                color[i]='#EEEEEE'
                textcolor[i]='rgba(85, 85, 85, 0.349)'
                actual_color[i]='none'
            }
        }
        updateImage(arr);
        setSelectedUnit(n)
        updateUnit(units[n])
        // setUnit(n)
        props.setUnit(n);
        console.log(n+"Printing from UnitsHooks")
        console.log(units[n])
        // console.log(unitSelected)
    }
    return(
        <div className="Units">
        {imagesupdate.map((e,index)=>{
         return  <div className="unit-box"
         style={{backgroundColor:color[index],
           border:actual_color[index], 
        }}
        onClick={()=>click(index)}
         onMouseOver={()=>mouseOver(index)}
         onMouseLeave={()=>(mouseleave(index))
        }
         >  <img className="imgoff"
         
          src={e} 
          /> <div   className="unit-caption"
          style={{color:textcolor[index]}}
          >{units[index]}</div>  </div>
        })}
        </div>
    )
}
export default Units;