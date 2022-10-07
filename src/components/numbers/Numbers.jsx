import React from 'react'
import { useState } from 'react'

const Numbers = () => {

const [list, setList] = useState([])

console.log(list)

// const formatList = (list) => {
//     var num = 123456;
// var digits = list.toString().split('');
// var realDigits = digits.map(Number)
// console.log(realDigits);
// }

// formatList()

  return (
    <div>
        Numbers
        <input type='number' onChange={(e) => setList(e.target.value)}/>
    </div>
  )
}

export default Numbers