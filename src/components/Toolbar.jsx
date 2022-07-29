import React from 'react'
import '../styles/toolbar.scss'

const ToolBar = () => {
  return (
    <div className='toolbar'>
      <div className="toolbar-section">
        <button className="toolbar__btn brush"></button>
        <button className="toolbar__btn rect"></button>
        <button className="toolbar__btn circle"></button>
        <button className="toolbar__btn eraser"></button>
        <button className="toolbar__btn line"></button>
        <input type="color" />
      </div>
      <div className="toolbar-section">
        <button className="toolbar__btn undo"></button>
        <button className="toolbar__btn redo"></button>
        <button className="toolbar__btn save"></button>
      </div>
    </div>
  )
}

export default ToolBar