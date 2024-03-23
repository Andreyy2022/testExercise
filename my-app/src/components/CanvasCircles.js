import { useEffect, useRef } from "react"

function CanvasCirtles() {
  useEffect(() => {
    const ctx1 = document.querySelector('canvas').getContext('2d');
    ctx1.beginPath();
    ctx1.arc( window.screen.availWidth / 2, window.screen.availHeight / 2, 150, 0, 2 * Math.PI );
    ctx1.stroke();

    const ctx2 = document.querySelector('canvas').getContext('2d');
    ctx2.beginPath();
    ctx2.arc( window.screen.availWidth / 2, window.screen.availHeight / 2, 250, 2 * Math.PI, 0 );
    ctx2.stroke();
  }, []);

    return (
      <div>
        <canvas width={1100} height={1100}></canvas>
      </div>
    );
}

export default CanvasCirtles;
