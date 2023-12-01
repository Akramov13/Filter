import React, { useState } from 'react'

function Script() {
  const [random, setRandom] = useState(0)
  const [time, setTime] = useState(0)
  const [main, setMain] = useState(0)
  const newRandom = () => {
    setRandom(Math.round(Math.random() * 255))
    setTime(Math.round(Math.random() * 255))
    setMain(Math.round(Math.random() * 255))
  }

  return (
    <div className='footer'>
      <div className='main'>
        <div className="name" style={{ background: `rgb(${random},${time},${main})` }}></div>
        <h4 style={{ color: `rgb(${random},${time},${main})` }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod fuga neque qui incidunt aspernatur expedita optio animi ipsa. Eum minus ratione dolorum aspernatur repellat, unde recusandae blanditiis doloribus corporis cupiditate.</h4>
      </div>
      <div className='flex1'>
        <div className='btn2'>
          <h1 style={{ color: 'white' }}>rgb({random},{time},{main})</h1>
          <button onClick={newRandom}>random color</button>
        </div>
        <div className='flex'>
          <div className='btn1'>
            <h1>red</h1>
            <button onClick={()=>setRandom(random - 5)}>-</button>
            <button onClick={()=>setRandom(random + 5)}>+</button>
          </div>
          <div className='btn1'>
            <h1>green</h1>
            <button onClick={()=>setTime(time - 5)} style={{background: 'green'}}>-</button>
            <button onClick={()=>setTime(time + 5)} style={{background: 'green'}}>+</button>
          </div>
          <div className='btn1'>
            <h1>blue</h1>
            <button onClick={()=>setMain(main - 5)} style={{background: 'blue'}}>-</button>
            <button onClick={()=>setMain(main + 5)} style={{background: 'blue'}}>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Script