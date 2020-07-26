import React,{useState,useEffect} from 'react'
import scaleoff from '../../Assets/lengthoff.svg'
import degreeoff from '../../Assets/tempoff.svg'
import degreeon from '../../Assets/tempon.svg'
import scaleon from '../../Assets/lengthon.svg'
import voloff from '../../Assets/volumeoff.svg'
import volon from '../../Assets/volon.svg'

const Units =  (props)=>{
  
    const[imagesof,setImageBack]=useState([scaleoff,degreeoff,voloff]);
    const[imagesupdate,updateImage]=useState([scaleon,degreeoff,voloff]);
    const[imageson]=useState([scaleon,degreeon,volon])
    const[selectedUnit,setSelectedUnit]=useState(0);
    const[units]=useState(["Length","Temperature","Volume"])
   const[actual_class]=useState(['length-selected unit-box','temp-class unit-box','vol-class unit-box'])
   const[setactual_class]=useState(['length-class unit-box','temp-class unit-box','vol-class unit-box'])
   const[selected_class]=useState(['length-selected unit-box','temp-selected unit-box','vol-selected unit-box'])


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
        updateImage(arr);
    }

  function  click(n){
        const arr=[];
        for(let i=0;i<imagesof.length;i++){
            if(i===n){
                actual_class[i]=selected_class[i]
                arr[i]=imageson[i]
            }else{
                actual_class[i]=setactual_class[i]
                arr[i]=imagesof[i];
              
            }
        }
        updateImage(arr);
        setSelectedUnit(n)
        props.setUnit(n);
        console.log(n+"Printing from UnitsHooks")
        console.log(units[n])

    }
    return(
        <div className="Units">
        {imagesupdate.map((e,index)=>{
         return  <div className={actual_class[index]}
    
        onClick={()=>click(index)}
         onMouseOver={()=>mouseOver(index)}
         onMouseLeave={()=>(mouseleave(index))
        }
         >  <img className="imgoff"
          src={e} 
          /> <div   className='unit-caption'
          >{units[index]}</div>  </div>
        })}
        </div>
    )
}
export default Units;