import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./grab.module.css";

type DerivedRoadsProps = {
  card: string;
  colWidth: number;
  data: { [key: string]: { tree: string[] } };
  form: string;
  derivedRoadType: string;
  isBlinking: any;
  roadFormsColor?: string;
  roadForms?: string[];
};

const DerivedRoads: React.FC<DerivedRoadsProps> = ({
  card,
  colWidth,
  data,
  form,
  derivedRoadType,
  isBlinking,
  roadFormsColor,
  roadForms,
}) => {
  // console.log("form place after within",data)
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0); 
  const [scrollLeft, setScrollLeft] = useState(0);
  // const cellData = useState(data?.[form + "|" + card]?.tree || []);
  const cellData = useMemo(() => data?.[form + "|" + card]?.tree || [], [data, form, card]);
  const height = 120;
  let x: any;
  let y: any;
  let svgWidth: any;
  let svgHeight: any;
  let fillStyle: any;   

  const minRequiredWidth = useMemo(() => {
    const minWidth = colWidth * 20 + 40; // 20px per item plus 40px for extra columns
    return minWidth;
  }, [colWidth]);

  const width = colWidth < 6 ? 200 : minRequiredWidth;

  // console.log("lastCell ", roadFormsColor)
  // function toggleBlinking() {
  //   setIsBlinking((prev)=>!prev);

  //   if (!isBlinking) {
  //     startBlinkingAnimation();
  //   }
  // };

  // function startBlinkingAnimation() {
  //   let visible = false;

  //   const blink = () => {
  //     visible = !visible;
  //     setIsBlinking(visible);
  //     // requestAnimationFrame(blink);
  //   };

  //   blink();

  //   // Stop the blinking animation after a certain time or when needed
  //   setTimeout(() => {
  //     setIsBlinking(false);
  //   }, 5000); // Stop blinking after 5 seconds (adjust as needed)
  // };

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (wrapperRef.current?.offsetLeft ?? 0));
    setScrollLeft(wrapperRef.current?.scrollLeft ?? 0);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const x = e.pageX - (wrapperRef.current?.offsetLeft ?? 0);
    const walk = x - startX;
    if (wrapperRef.current) {
      wrapperRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  useEffect(() => {
    if (colWidth > 6 && wrapperRef.current) {
      wrapperRef.current.scrollLeft = wrapperRef.current.scrollWidth;
    }
  }, [colWidth, data]);

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const drawGrid = useMemo(() => {
    return (canvas: HTMLCanvasElement) => {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.clearRect(0, 0, width, height);
        ctx.strokeStyle = "#eee";

        for (let x = 0; x <= width; x += 20) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
        }

        for (let y = 0; y <= height; y += 20) {
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
        }

        ctx.stroke();
      }
    };
  }, [width]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      drawGrid(canvas); 
    }
  }, [colWidth, drawGrid]);

  // function drawBlinkingCircle() {
  //   const canvas: any = canvasRef.current;
  //     const ctx:any = canvas.getContext('2d');
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);

  //   // Draw the circle with a blinking effect
  //   ctx.beginPath();
  //   ctx.arc(100, 100, 40, 0, 2 * Math.PI);
  //   ctx.fillStyle = blinkingEffect() ? '#cccccc' : 'transparent';
  //   ctx.fill();

  //   requestAnimationFrame(drawBlinkingCircle);
  // }
  function drawBlinkingCircle() {
    const canvas: any = canvasRef.current;
    const ctx: any = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const blinkingImage = generateBlinkingSvg("smallroad", fillStyle);
    ctx.drawImage(
      blinkingImage,
      x - svgWidth / 2,
      y - svgHeight / 2,
      svgWidth,
      svgHeight
    );

    requestAnimationFrame(drawBlinkingCircle);
  }  

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (ctx) {
      const cellSize = 20;
      const svgWidth = 16;
      const svgHeight = 16;
      let svgDataUrl: string | undefined;
      let fillStyle;
      cellData.forEach((cell) => {
        const [row, col, letter]:any = cell;

        const x = Math.round(+col * cellSize + cellSize / 2);
        const y = Math.round(+row * cellSize + cellSize / 2);

        if (letter === "R") {
          fillStyle = "red";
        } else if (letter === "B") {
          fillStyle = "#007aff";
        } else {
          fillStyle = "blue";
        }

        if (derivedRoadType.toLowerCase() === "bigeyeboy") {
          let arcColor: string;

          if (letter === "R") {
            arcColor = "red";
          } else {
            arcColor = "#007aff";
          }

          svgDataUrl = generateSvg("bigeyeboy", arcColor);
        } else if (derivedRoadType === "smallroad") {
          svgDataUrl = generateSvg("smallroad", fillStyle);
        } else if (derivedRoadType === "cockroachpig") {
          svgDataUrl = generateSvg("cockroachpig", fillStyle);
        }

        drawSvgOnCanvas(canvas, svgDataUrl, x, y, svgWidth, svgHeight);
      });
      console.log("0000000000000000000000000000000000")
      if (isBlinking) {
        const iconX = width - 20; // Adjust the X position
        const iconY = height / 2 - 10; // Adjust the Y position
        const lastCell = cellData[cellData.length - 1];
        console.log("lastCell", lastCell, roadFormsColor);
        let [row, col, lastLetter]: any = lastCell;

        if (roadFormsColor === lastLetter) {
          x = col * cellSize + cellSize / 2;
          y = (row + 1) * cellSize + cellSize / 2;
        } else {
          row = 0;
          x = (col + 1) * cellSize + cellSize / 2;
          y = row * cellSize + cellSize / 2;
        }
        if (roadFormsColor === "R") {
          fillStyle = "red";
        } else if (roadFormsColor === "B") {
          fillStyle = "#007aff";
        } else {
          fillStyle = "blue";
        }

        if (derivedRoadType.toLowerCase() === "bigeyeboy") {
          let arcColor;

          if (roadFormsColor === "R") {
            arcColor = "red";
          } else {
            arcColor = "#007aff";
          }

          svgDataUrl = generateBlinkingSvg("bigeyeboy", arcColor);
        } else if (derivedRoadType === "smallroad") {
          svgDataUrl = generateBlinkingSvg("smallroad", fillStyle);
        } else if (derivedRoadType === "cockroachpig") {
          svgDataUrl = generateSvg("cockroachpig", fillStyle);
        }

        // drawSvgOnCanvas(canvas, svgDataUrl, x, y, svgWidth, svgHeight);
        // drawAnimatedSvgOnCanvas(canvas, svgDataUrl, x, y, svgWidth, svgHeight);
      }
    }
  }, [colWidth, isBlinking, roadForms]);

  return ( 
    <div
      style={{
        overflowX: "auto",
        maxWidth: 350,
        marginRight: "10px",
        userSelect: "none",
      }}
      ref={wrapperRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      className={`${styles.scrollcontaioner} ${styles.derivedRoadContainer}`}
    >
      {/* <button>Start Blinking{JSON.stringify(isBlinking)}</button> */}
      {/* {JSON.stringify(cellData)} */}
      <br />
      <canvas ref={canvasRef} width={width} height={height}></canvas>
    </div>
  );
};

const drawSvgOnCanvas = (
  canvas: HTMLCanvasElement | null,
  svgDataUrl: string | undefined,
  x: number,
  y: number,
  svgWidth: number,
  svgHeight: number
) => {
  const ctx = canvas?.getContext("2d");
  const img: any = new Image();

  img.onload = function () {
    const offsetX = x - svgWidth / 2;
    const offsetY = y - svgHeight / 2;
    ctx?.drawImage(img, offsetX, offsetY, svgWidth, svgHeight);
  };

  img.src = svgDataUrl; //+ "?t=" + Date.now();
};

// function animate() {
//   ctx?.drawImage(img, offsetX, offsetY, svgWidth, svgHeight);

//   requestAnimationFrame(animate);
// }

function blinkingEffect() {
  // Customize your blinking logic here
  return Math.floor(Date.now() / 500) % 2 === 0;
}

const SVG_TEMPLATES: Record<string, string> = {
  bigeyeboy:
    '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"> <circle cx="8" cy="8" r="4" fill="transparent" stroke="${arcColor}" stroke-width="3" /> </svg>',

  smallroad:
    '<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"> <circle cx="6" cy="5" r="4" fill="${fillStyle}" /> </svg>',

  cockroachpig:
    '<svg width="8" height="8" xmlns="http://www.w3.org/2000/svg"> <rect x="1" y="1" width="8" height="2" rx="5" ry="5" fill="${fillStyle}" transform="rotate(-45 6 4)" /> </svg>',
};

const BLINK_SVG_TEMPLATES: Record<string, string> = {
  bigeyeboy:
    '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="4" fill="transparent" stroke="#cccccc" stroke-width="3"><animate attributeName="stroke" values="${arcColor};transparent" begin="0s" dur="0.5s" calcMode="discrete" repeatCount="indefinite" /> </circle> </svg>',

  smallroad:
    '<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"> <circle cx="6" cy="6" r="4" fill="#cccccc">  <animate attributeName="fill"  values="${fillStyle};transparent" begin="0s" dur="0.5s" calcMode="discrete" repeatCount="indefinite"/></circle></svg>',

  cockroachpig:
    '<svg width="8" height="8" xmlns="http://www.w3.org/2000/svg"> <rect x="1" y="1" width="8" height="2" rx="5" ry="5" fill="#cccccc" transform="rotate(-45 6 4)"> <animate attributeName="fill" values="${fillStyle};transparent" begin="0s" dur="0.5s" calcMode="discrete" repeatCount="indefinite" /> </rect> </svg>',
};

function generateSvg(type: string, color: string): string {
  const template = SVG_TEMPLATES[type];

  if (!template) {
    throw new Error(`No SVG template found for ${type}`);
  }

  let svg = template;

  if (type === "bigeyeboy") {
    svg = svg.replace("${arcColor}", color);
  } else {
    svg = svg.replace("${fillStyle}", color);
  }

  const encoded = encodeURIComponent(svg);

  return `data:image/svg+xml,${encoded}`;
}

const getAnimatedSvgDataUrl = (template: any, options: any) => {
  let svg = template;

  // Inject blinking animation
  svg =
    svg +
    `
    <style>  @keyframes blink {  50% { opacity: 0; } } circle, rect { animation: blink 1s step-end infinite; } </style>
  `;

  // Replace placeholders
  if (options.fillStyle) {
    svg = svg.replace("${fillStyle}", options.fillStyle);
  }

  if (options.arcColor) {
    svg = svg.replace("${arcColor}", options.arcColor);
  }

  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

function generateBlinkingSvg(type: string, color: string): string {
  const template = BLINK_SVG_TEMPLATES[type];

  if (!template) {
    throw new Error(`No SVG template found for ${type}`);
  }

  let svg = template;

  if (type === "bigeyeboy") {
    svg = svg.replace("${arcColor}", color);
  } else {
    svg = svg.replace("${fillStyle}", color);
  }

  const encoded = encodeURIComponent(svg);

  return `data:image/svg+xml,${encoded}`;
}

// drawAnimatedSvgOnCanvas(canvas, svgtemplate.bigeyeboy, 100, 100, 32, 32);
export default DerivedRoads;
