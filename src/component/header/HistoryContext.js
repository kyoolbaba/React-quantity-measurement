import React ,{createContext,useState} from 'react'
export const HistoryContext=createContext();

export const  HistoryProvider= props=>{
    const [history, updateHistory]=useState([{
        MainUnit:'Length',
        fromUnit:'cm',
        quantity:100,
        toUnit:'mm'
    },
    {
        MainUnit:'Length',
        fromUnit:'cm',
        quantity:150,
        toUnit:'mm'
    },{
        MainUnit:'Length',
        fromUnit:'cm',
        quantity:350,
        toUnit:'mm'
    }

]
)
        return(
          <HistoryContext.Provider value={[history,updateHistory]} >
          {props.children}   
          </HistoryContext.Provider>
        );
    }
   