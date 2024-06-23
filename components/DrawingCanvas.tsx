'use client'
import React, { useEffect } from 'react'
import rough from 'roughjs'

const DrawingCanvas = () => {

    useEffect(()=>{

        const canvas = document.getElementById('canvas') as HTMLCanvasElement 
        // const context = canvas.getContext("2d") as CanvasRenderingContext2D
        const rc = rough.canvas(canvas)
        rc.rectangle(15, 15, 90, 30);
        rc.circle(20,20,20)
        rc.line(80, 120, 300, 100);
    },[])

  return (
    <canvas  className='w-full h-screen'  id="canvas"></canvas>
  )
}

export default DrawingCanvas