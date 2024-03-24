import { useEffect } from "react";

function CanvasCirtles() {
    
  useEffect(() => {
    const ctx1 = document.querySelector('#canvas').getContext('2d');
    ctx1.beginPath();
    ctx1.arc( window.screen.availWidth / 2, window.screen.availHeight / 2, 150, 0, 2 * Math.PI );
    ctx1.stroke();

    let r1 = 150; // радиус
    let amountOfPoints1 = 10; // количество точек
    let x1, y1;
    for(let i = 0; i < Math.PI * 2; i += Math.PI * 2 / amountOfPoints1){
        ctx1.beginPath();
        x1 = window.screen.availWidth / 2 + r1 * Math.sin(i);
        y1 = window.screen.availHeight / 2 + r1 * Math.cos(i);
        ctx1.arc(x1, y1, 10, 0, 2 * Math.PI);
        ctx1.stroke();
        ctx1.closePath();
    }

    const ctx2 = document.querySelector('#canvas').getContext('2d');
    ctx2.beginPath();
    ctx2.arc( window.screen.availWidth / 2, window.screen.availHeight / 2, 300, 2 * Math.PI, 0 );
    ctx2.stroke();

    let r2 = 300; // радиус
    let amountOfPoints2 = 29; // количество точек
    let x2, y2;
    for(let i = 0; i < Math.PI * 2; i += Math.PI * 2 / amountOfPoints2){
        ctx1.beginPath();
        x2 = window.screen.availWidth / 2 + r2 * Math.sin(i);
        y2 = window.screen.availHeight / 2 + r2 * Math.cos(i);
        ctx1.arc(x2, y2, 10, 0, 2 * Math.PI);
        ctx1.stroke();
        ctx1.closePath();
    }
  }, []);

    return (
      <div>
        <canvas id="canvas" width={window.screen.availWidth} height={window.screen.availWidth}></canvas>
      </div>
    );
}

export default CanvasCirtles;
