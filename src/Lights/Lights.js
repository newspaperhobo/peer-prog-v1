import React from 'react'
import Lightbulb from '../Lightbulb/Lightbulb';

function Lights() {
    return (
      <div className="">
        <ul className="lights-container neon">
          <div>
            <Lightbulb id="magenta-1 none" color="midnightblue" />
          </div>
          <div>
            <Lightbulb id="cyan-1" color="cyan" />
          </div>
          {/* <div>
            <Lightbulb id="yellow" color="yellow" />
          </div> */}
          <div>
            <Lightbulb id="orange-1" color="rgb(255, 123, 8)" />
          </div>
          <div>
            <Lightbulb id="green-1" color="rgb(0, 255, 0)" />
          </div>
          <div>
            <Lightbulb id="magenta-1" color="magenta" />
          </div>
          <div>
            <Lightbulb id="cyan-1" color="cyan" />
          </div>
          {/* <div>
            <Lightbulb id="yellow" color="yellow" />
          </div> */}
          <div>
            <Lightbulb id="orange-1" color="rgb(255, 123, 8)" />
          </div>
          <div>
            <li className="light-stem" />
            <li className="circle-container green" id="green-1"
            />
          </div>
        </ul>
      </div>
    );
}

export default Lights;
