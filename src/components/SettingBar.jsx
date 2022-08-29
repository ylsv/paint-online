import React from 'react'
import toolState from '../store/toolState'
import '../styles/toolbar.scss'

const SettingBar = () => {
  return (
    <div className='setting-bar'>
      <div className="line-width">
        <label htmlFor="line-width">Толщина линии</label>
        <input
          id="line-width"
          type="number"
          min={1}
          max={50}
          defaultValue={5}
          onChange={e => toolState.setLineWidth(e.target.value)}
        />
      </div>
      <div className="stroke-color">
        <label htmlFor="stroke-color">Цвет обводки</label>
        <input
          id="stroke-color"
          type="color"
          onChange={e => toolState.setStrokeColor(e.target.value)}
        />
      </div>
    </div>
  )
}

export default SettingBar