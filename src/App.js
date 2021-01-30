import React from 'react'
import Grid from './Grid'


export default function App(props){
   const[data,setdata]=React.useState({
       winner:{
           name:undefined,
           indexes:[]
       },
    turn:'cross',   
    positions:new Array(9).fill(null)
    })
    
    console.log(data)

    return( 
    <Grid
    winningIndexes={data.winner.indexes}
     positions={data.positions} 
     setPositions={index =>{
         setdata(prevData=>{
        if(!prevData.positions[index] && !prevData.winner.name){
         const data={...prevData}
         data.positions[index]=data.turn
         const lines=[
             [0,1,2],
             [3,4,5],
             [6,7,8],
             [0,3,6],
             [1,4,7],
             [2,5,8],
             [0,4,8],
             [2,4,6]
           ]
           lines.forEach(line=>{
               const [a,b,c]=line
               if(data.positions[a] &&
                   data.positions[a]===data.positions[b] &&
                   data.positions[a]===data.positions[c]){
                       data.winner.name=data.turn
                       data.winner.indexes=line
                   }
           })
         data.turn=(data.turn==='cross') ? 'circle':'cross'
         return data
        }
        else{
            return prevData
        }
        })
     }}
    />
    )
}