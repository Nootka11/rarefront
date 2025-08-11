"use client"

import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"

export default function AnimatedSplitText({text, width, delay = 0 }) {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!containerRef.current) return

            // Hide the container until the fonts are loaded
            containerRef.current.style.visibility = "visible"

            const { words } = splitText(
                containerRef.current.querySelector("span")!
            )

            // Animate the words in the h1
            animate(
                words,
                { opacity: [0, 1], y: [10, 0] },
                {
                    type: "spring",
                    duration: 2,
                    bounce: 0,
                    delay: stagger(0.09, { startDelay: delay }),
                }
            )
        })
    }, [])

    return (
        <div className="split__container" ref={containerRef}>
            <span className="h1">
                {text}
            </span>
            <Stylesheet width={width} />
        </div>
    )
}

function Stylesheet({width}) {
    return (
        <style>{`
            .split__container {                
                justify-content: center;
                align-items: center;
                width: 100%;                              
                visibility:hidden;  
                           
            }
            .split-word {
                will-change: transform, opacity;
            }
                @media (min-width: 768px) {
                    .split__container {
                    max-width: ${width};
                   
                    }
                }
                        
        `}</style>
    )
}
