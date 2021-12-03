import React,{useState} from 'react'
import Numpad from "./Numpad";
import Opps from './Opps'
import './App.css'

export default function App() {
  const [calc, setcalc] = useState('')
  const allNums = [7,8,9,4,5,6,1,2,3]
  const operations = ['/','*','+','-','.']

  function handleClick(n){
    if(!operations.includes(calc[calc.length-1]) && operations.includes(n)){
      setcalc(prev => prev+n)
    } if (!operations.includes(n)){
      setcalc(prev => prev+n)
    }
  }

  function handleEnter(){
    setcalc(prev => eval(prev).toString())
  }

  function handleBack(){
    if(calc.length > 0){
      setcalc(prev => prev.slice(0,-1))
    }
  }

  function handleAC(){
    setcalc('')
  }

  return (
    <div className='calculator'>
        <div className='display-cont'>
          <div className='display'>{calc !== '' ? calc : 0}</div>
        </div>
        <div className='container'>
          <div className='operations'>
            {operations.map((op, index) => (
              <Opps
                op={op}
                handleClick={handleClick}
                key={index}
              />
            ))}
          </div>
          <div className='numpad'>
          {allNums.map((num, index) => (
              <Numpad
                num={num}
                handleClick={handleClick}
                key={index}
              />
          ))}
          <button onClick={handleEnter} className='controls'>Enter</button>
          <button onClick={handleBack} className='controls'>⌫</button>
          <button onClick={handleAC} className='controls'>AC</button>
          </div>
        </div>
    </div>
  )
}
