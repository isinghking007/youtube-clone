import React from 'react'
import './Header.css'
import {FaYoutube} from 'react-icons/fa'
import {MdSearch, MdViewComfy,MdVideoCall} from 'react-icons/md'
import {AiTwotoneBell} from 'react-icons/ai'
function Header(){
    return(
        
        <div className="Header">
            <div className="Header1">
                <header className="header">
                    <button className="button">
                        &#9776;
                    </button>
                    <FaYoutube color="red" fontSize="3rem" />
                    <div>YouTube</div>
                </header>
                <div className="Search">
                    <input type="search" placeholder="Search" />
                    <div className="search" >
                        <MdSearch fontSize="3rem" />
                    </div>
                </div>
                <div className="Icon">
                    <div className="icon"><MdVideoCall fontSize="2.8rem"/></div>
                    <div className="icon"><MdViewComfy fontSize="2.8rem"/></div>
                    <div className="icon"><AiTwotoneBell fontSize="2.8rem"/></div>
                    <div className="icon">
                        <img src="/images/avinash.jpg" alt="Avinash"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header