import React from 'react';
import Lights from '../Lights/Lights';

const Control = () => {    
    // const animationDisplay = Lights.getElementById('magenta','cyan','orange', 'green');
    
    // const handleSwitch = () => {
    //     animationDisplay. = "none")
    //     }

    return (
        <div className="center">
            <div>
                <label id="switch" className="switch">
                <input 
                    type="checkbox"
                    // onClick={handleSwitch}
                />
                <span className="slider round"></span>
                </label>
            </div>
            
            {/* <button></button> */}
        </div>
    )
}

export default Control
