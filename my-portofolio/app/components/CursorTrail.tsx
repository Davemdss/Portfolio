"use client"

import { useEffect, useState, useRef } from "react"

interface TrailPoint {
  x: number
  y: number
  id: number
  timestamp: number
}

export default function CursorTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([])
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const trailIdRef = useRef(0)

  useEffect(() => {
    let animationId: number

    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY }
    }

    const updateTrail = () => {
      const now = Date.now()
      const mousePos = mousePositionRef.current

      setTrail((prevTrail) => {
        let newTrail = [...prevTrail]

        if (mousePos.x !== 0 || mousePos.y !== 0) {
          newTrail.push({
            x: mousePos.x,
            y: mousePos.y,
            id: trailIdRef.current++,
            timestamp: now,
          })
        }

        newTrail = newTrail.filter((point) => now - point.timestamp < 600)

        return newTrail
      })

      animationId = requestAnimationFrame(updateTrail)
    }

    document.addEventListener("mousemove", handleMouseMove)
    animationId = requestAnimationFrame(updateTrail)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => {
        const age = Date.now() - point.timestamp
        const maxAge = 600
        const timeOpacity = Math.max(0, 1 - age / maxAge)
        const positionOpacity = (index + 1) / trail.length
        const opacity = timeOpacity * positionOpacity
        const scale = opacity * 0.6

        return (
          <div
            key={point.id}
            className="absolute w-2 h-2 rounded-full transition-all duration-100 ease-out"
            style={{
              left: point.x - 4,
              top: point.y - 4,
              backgroundColor: `rgba(255, 77, 0, ${opacity * 0.7})`,
              transform: `scale(${scale})`,
              boxShadow: `0 0 ${8 * opacity}px rgba(255, 77, 0, ${opacity * 0.5})`,
            }}
          />
        )
      })}
    </div>
  )
}
