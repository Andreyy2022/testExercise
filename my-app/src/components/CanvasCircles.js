import { useEffect, useRef } from "react";

function CanvasCirtles() {
    
  useEffect(() => {
    const ctx1 = document.querySelector('#canvas').getContext('2d');
    ctx1.beginPath();
    ctx1.arc( window.screen.availWidth / 2, window.screen.availHeight / 2, 150, 0, 2 * Math.PI );
    ctx1.stroke();
/*
    let r = 150; // радиус
    let amountOfPoints = 10; // количество точек
    let x, y;
    for(let i = 0; i < Math.PI * 2; i += Math.PI * 2 / amountOfPoints){
        ctx1.beginPath();
        x = window.screen.availWidth / 2 + r * Math.sin(i);
        y = window.screen.availHeight / 2 + r * Math.cos(i);
        ctx1.arc(x, y, 10, 0, 2 * Math.PI);
        ctx1.closePath();
    }
*/
    const ctx2 = document.querySelector('#canvas').getContext('2d');
    ctx2.beginPath();
    ctx2.arc( window.screen.availWidth / 2, window.screen.availHeight / 2, 300, 2 * Math.PI, 0 );
    ctx2.stroke();
  }, []);

    return (
      <div>
        <canvas id="canvas" width={1100} height={1100}></canvas>
      </div>
    );
}

export default CanvasCirtles;
