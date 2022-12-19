import React from 'react'

import { useRef } from 'react'

import Sketch from 'react-p5'
import { useEffect } from 'react'


function Footer(props) {



  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 100).parent(canvasParentRef)
  }
  
  const draw = p5 => {
    p5.background(0,0,0)
    p5.text('Tonal Festival', 0, 50);
    p5.textSize(50);
    p5.noFill();
    p5.stroke('white');

    p5.textStyle(p5.BOLD);
  }


  return (
    <div>
   <Sketch draw={draw} setup={setup} />

    </div>
  )
}

export default Footer