import React from "react";
import './Main.css'

function Main(){
    return (
        <div>
            <div style={{ width : '1000px' , margin : '0 auto' , overflow : 'hidden'}} onMouseOver={()=>{
            
                // let index = 0;
                // const movieCall = document.querySelector(".moviecall");
                // const movieLi = document.querySelectorAll(".movieli");
                // const slide = () => {
                //   index++;
                //   if (index >= movieLi.length) {
                //     index = 0;
                //   }
                //   movieCall.style.transform = `translateX(-${index * 1000}px)`;
                // };
                // setInterval(slide, 2000);
            
            
            }} onMouseOut={() => {
                clearInterval();
              }}>
               <ul className="moviecall" style={{ width : '3000px' ,margin : '0 auto'  , display : 'flex'}}>
                 <li className="movieli">
                    <img src={process.env.PUBLIC_URL + './image/노을화면1.jpg'} alt="" />
                 </li>
                 <li className="movieli">
                    <img src={process.env.PUBLIC_URL + './image/밤하늘2.jpg'} alt="" />
                 </li>
                 <li className="movieli">
                    <img src={process.env.PUBLIC_URL + './image/빙산.jpg'} alt="" />
                 </li>
                </ul>
            
            </div>
        </div>
    )
}

export default Main ;