import React from "react";
import './Header.css'

function Header (props) {
    return(
        <div style={{  width : '100vw' , height : '100px' , backgroundColor : 'black' , display : 'flex' , justifyContent : 'space-between'}}>
           <div>
             <img src={process.env.PUBLIC_URL + './image/노을화면1.jpg'} alt="logo" style={{width : '200px' , height : '100px'}} />
           </div>
           <div >
               <ul className="menulist" style={{display : 'flex'}}>
                  <li className="mainmenu"><a  href="">Main Menu1</a>
                    <ul className="sublist">
                        <li>Sub Menu1</li>
                        <li>Sub Menu2</li>
                        <li>Sub Menu3</li>
                        <li>Sub Menu4</li>
                        <li>Sub Menu5</li>
                    </ul>
                  </li>

                  <li className="mainmenu"><a href="">Main Menu1</a>
                    <ul className="sublist">
                        <li>Sub Menu1</li>
                        <li>Sub Menu2</li>
                        <li>Sub Menu3</li>
                        <li>Sub Menu4</li>
                        <li>Sub Menu5</li>
                    </ul>
                  </li>

                  <li className="mainmenu"><a href="">Main Menu1</a>
                    <ul className="sublist">
                        <li>Sub Menu1</li>
                        <li>Sub Menu2</li>
                        <li>Sub Menu3</li>
                        <li>Sub Menu4</li>
                        <li>Sub Menu5</li>
                    </ul>
                  </li>

                  <li className="mainmenu"><a href="">Main Menu1</a>
                    <ul className="sublist">
                        <li>Sub Menu1</li>
                        <li>Sub Menu2</li>
                        <li>Sub Menu3</li>
                        <li>Sub Menu4</li>
                        <li>Sub Menu5</li>
                    </ul>
                  </li>
                    
               </ul>

             
           </div>
        </div>
    )
}

export default Header ;