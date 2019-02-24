import React, {Fragment} from 'react'

import './configurator.css'

const Configurator = ({formSize, theme, setFormSize, setTheme}) => {
  return (
    <Fragment>
      <div className="radio-group">
        <input id='normal' name="size" type="radio" value='normal'
               checked={formSize === 'normal'}
               onChange={setFormSize}/>
        <label htmlFor='normal'>Normal</label>
        <input id='large' name="size" type="radio" value='large'
               checked={formSize === 'large'}
               onChange={setFormSize}/>
        <label htmlFor='large'>Large</label>
      </div>
      <div className="radio-group">
        <input id='universal' name="theme" type="radio" value='universal'
               checked={theme === 'universal'}
               onChange={setTheme}/>
        <label htmlFor='universal'>Универсал</label>
        <input id='dark' name="theme" type="radio" value='dark'
               checked={theme === 'dark'}
               onChange={setTheme}/>
        <label htmlFor='dark'>Темный</label>
        <input id='light' name="theme" type="radio" value='light'
               checked={theme === 'light'}
               onChange={setTheme}/>
        <label htmlFor='light'>Светлый</label>
      </div>
    </Fragment>
  )
};

export default Configurator
