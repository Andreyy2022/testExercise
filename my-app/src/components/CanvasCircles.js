import { useEffect, useRef } from "react";

function CanvasCirtles() {
    
  useEffect(() => {
    const ctx1 = document.querySelector('#canvas').getContext('2d');
    ctx1.beginPath();
    ctx1.arc( window.screen.availWidth / 2, window.screen.availHeight / 2, 150, 0, 2 * Math.PI );
    ctx1.stroke();

    const ctx2 = document.querySelector('#canvas').getContext('2d');
    ctx2.beginPath();
    ctx2.arc( window.screen.availWidth / 2, window.screen.availHeight / 2, 300, 2 * Math.PI, 0 );
    ctx2.stroke();
  }, []);

  useEffect(() => {
    let r = 90; // радиус
    let amountOfPoints = 7; // количество точек
    let x, y;
    let ctx = document.querySelector('#canvas').getContext('2d');
    for(let i = 0; i < Math.PI * 2; i += Math.PI * 2 / amountOfPoints){
        x = ctx.width / 2 + r * Math.sin(i);
        y = ctx.height / 2 + r * Math.cos(i);
    }
  }, []);

    return (
      <div>
        <canvas id="canvas" width={1100} height={1100}></canvas>
      </div>
    );
}

export default CanvasCirtles;
