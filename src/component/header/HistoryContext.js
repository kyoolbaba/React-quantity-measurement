import React ,{createContext,useState} from 'react'
export const HistoryContext=createContext();

export const  HistoryProvider= props=>{
    const [history, updateHistory]=useState([{
        MainUnit:'Length',
        fromUnit:'cm',
        quantity:100,
        toUnit:'mm',
        value:0
    },
    {
        MainUnit:'Length',
        fromUnit:'cm',
        quantity:150,
        toUnit:'mm',
        value:0
    },{
        MainUnit:'Length',
        fromUnit:'cm',
        quantity:350,
        toUnit:'mm',
        value:0
    }

]
)
        return(
          <HistoryContext.Provider value={{history,updateHistory}} >
          {props.children}   
          </HistoryContext.Provider>
        );
    }
   