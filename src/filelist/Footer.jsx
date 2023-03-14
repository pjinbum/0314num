import React from "react";
import { useState } from "react";


let stylelelelele = {
    footer : {
        width : '100vw',
        height : '300px' ,
        backgroundColor : 'aqua'
    } ,

    boxx : {

        width : '300px',
        height : '200px' ,
        backgroundColor : 'yellowgreen' , 
        margin : '0 30px'
    }
}


function Footer(props){

      let numbering = [1,2,3,4,5]
     let [page , setPage] = useState(numbering)



    return(
        <div style={{display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}>
          <div style={stylelelelele.boxx}>
            <button onClick={(i)=>{
                let copynumbering = [...numbering]
                copynumbering[i] = copynumbering[i] + i+1
                setPage(copynumbering)
            }}>click me</button>
            <input type="text" value={page} />
          </div>
          <div style={stylelelelele.boxx}>
            <button>click me</button>
            <input type="text" value={numbering} />
          </div>
          <div style={stylelelelele.boxx}>
            <button>click me</button>
            <input type="text" value={page}/>
          </div>
         
          
        </div>
    )
}

export default Footer ;