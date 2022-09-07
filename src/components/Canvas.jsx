import React, { useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import canvasState from '../store/canvasState'
import '../styles/canvas.scss'
import toolState from '../store/toolState'
import Brush from '../tools/Brush'

const Canvas = observer(() => {
  const canvasRef = useRef()
  useEffect(() => {
    canvasState.setCanvas(canvasRef.current)
    toolState.setTool(new Brush(canvasRef.current))
  }, [])
  
  const mouseDownHandler = () => {
    canvasState.pushToUndo(canvasRef.current.toDataURL())
  }

  return (
    <div className='canvas'>
      <canvas width={600} height={400} ref={canvasRef} onMouseDown={mouseDownHandler} />
    </div>
  )
})

export default Canvas