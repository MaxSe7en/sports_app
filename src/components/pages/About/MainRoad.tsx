import React, { useRef, useEffect, useState, useMemo } from 'react';
import styles from './grab.module.css'
type MainRoadProps = {
    card: string;
    colWidth: number;
    data: any;
    form: string;
};

const MainRoad: React.FC<MainRoadProps> = ({
    card,
    colWidth,
    data,
    form,
}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const cellData = data?.[form + "|" + card] || [];
    const height = 120;
    const scrollContainerRef = useRef(null);
 

    // Calculate the minimum required width based on the number of items in the tree
    const minRequiredWidth = useMemo(() => {
        const minWidth = colWidth * 20 + 40; // 20px per item plus 40px for extra columns
        return minWidth;
    }, [cellData]);

    const width = colWidth < 12 ? 320 : minRequiredWidth;

    const drawGrid = useMemo(() => {
        return (canvas: HTMLCanvasElement) => {
            const ctx = canvas.getContext("2d");

            if (ctx) {
                ctx.clearRect(0, 0, width, height);
                ctx.strokeStyle = "#eee";
                ctx.lineWidth = 1;

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
    }, [data]);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (canvas) {
            drawGrid(canvas);
        }
    }, [drawGrid]);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const onMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (wrapperRef.current?.offsetLeft || 0));
        setScrollLeft(wrapperRef.current?.scrollLeft || 0);
    };

    useEffect(() => {
        if (colWidth > 12) {
            if (wrapperRef.current) {
                wrapperRef.current.scrollLeft = wrapperRef.current.scrollWidth;
            }
        }
    }, [data]);

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;

        const x = e.pageX - (wrapperRef.current?.offsetLeft || 0);
        const walk = x - startX;
        if (wrapperRef.current) {
            wrapperRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    function debounce(func: Function, delay: number) {
        let timeoutId: NodeJS.Timeout;
        return (...args: any[]) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func(...args);
            }, delay);
        };
    }

    const debouncedMouseMove = useMemo(() => {
        return debounce(onMouseMove, 100);
    }, [onMouseMove]);

    const onMouseLeave = () => {
        if (isDragging) {
            setIsDragging(false);
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx: any = canvas?.getContext("2d");

        if (ctx) {
            const cellSize = 20;

            cellData?.forEach((cell: any) => {
                let [row, col, letter]:any = cell;
                ctx.strokeStyle = "#eee";
                ctx.font = "16px Times New Roman";

                let color: string;
                if (letter === "D" || letter === "P" || letter === "O" || letter === "B" || letter === "F") {
                    color = "red";
                } else if (letter === "T" || letter === "C" || letter === "E" || letter === "S" || letter === "L" || letter === "G") {
                    color = "blue";
                } else if (letter === "A") {
                    letter = "T"; 
                    color = "green";
                } else if(letter === "K") {
                    letter = "S";
                    color = "green";
                } else if(letter === "Y") {
                    letter = "S"
                    color = "red";
                } else if(letter === "J") {
                    letter = "B"
                    color = "blue";
                } else if(letter === "M") {
                    letter = "P"
                    color = "red";
                }else {
                    color = "black";
                }

                ctx.fillStyle = color;

                const textX = +col * cellSize + cellSize / 2 - ctx.measureText(letter).width / 2;
                const textY = +row * cellSize + cellSize / 2 + 6;

                ctx.fillText(letter, textX, textY);
            });

            ctx.stroke();
        }
    }, [data]);

    return (
        <div
            ref={wrapperRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            className={styles.scrollcontaioner}
            style={{
                overflowX: "auto",
                maxWidth: 310,
                marginRight: "10px",
                userSelect: "none",
            }}
        >
            <canvas ref={canvasRef} width={width} height={height}></canvas>
        </div>
    );
};

export default MainRoad;
