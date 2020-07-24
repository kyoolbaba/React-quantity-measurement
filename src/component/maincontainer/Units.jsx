import React,{useState} from 'react'
import scaleoff from '../../Assets/lengthoff.svg'
import degreeoff from '../../Assets/tempoff.svg'
import degreeon from '../../Assets/tempon.svg'
import scaleon from '../../Assets/lengthon.svg'
import voloff from '../../Assets/volumeoff.svg'
import volon from '../../Assets/volon.svg'

function Units  (){
    const[imagesof,setImageBack]=useState([scaleoff,degreeoff,voloff]);
    const[imagesupdate,updateImage]=useState([scaleon,degreeoff,voloff]);
    const[imageson]=useState([scaleon,degreeon,volon])
    const[selectedUnit,setSelectedUnit]=useState(0);
    const[background_color,setBackground_color]=useState('')
    const[background_color_hover,setBackground_color_hover]=useState('')
    const[units]=useState(["Length","Temperature","Volume"])
    const [color]=useState(['green','red','blue'])
    const[border]=useState(['gray'])



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

  function   click(n){
        const arr=[];
        for(let i=0;i<imagesof.length;i++){
         
            if(i===n){
                arr[i]=imageson[i]
            }else{
                arr[i]=imagesof[i];
            }
        }
        updateImage(arr);
        setSelectedUnit(n)
    }
    return(
        <div className="Units">
        {imagesupdate.map((e,index)=>{
         return  <div className="unit-box" >  <img className="imgoff"
         onClick={()=>click(index)}
         onMouseOver={()=>mouseOver(index)}
         onMouseLeave={()=>(mouseleave(index))}
          src={e} 
            style={{backgroundColor:color[index]}}
          /> <div className="unit-caption">{units[index]}</div>  </div>
        })}
        </div>
    )
}
export default Units;