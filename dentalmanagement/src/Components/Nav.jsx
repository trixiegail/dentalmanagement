import React from "react";
import logo from '../Images/logo.png';

function Nav(){
    return(
        <nav>
            <div className="header">
                <img 
                    src={logo}
                    alt="logo"
                    style={{
                        width: '100%'
                    }}
                />
            </div>
        </nav>
    );
}

export default Nav;