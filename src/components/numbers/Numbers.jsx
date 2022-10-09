import './numbers.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import Chart from './Chart'

const Numbers = () => {

const [list, setList] = useState([])

const [numb, setNumb] = useState([])
const [freq, setFreq] = useState([])

// console.log(list)

// const formatList = (list) => {
//     var num = 123456;
// var digits = list.toString().split('');
// var realDigits = digits.map(Number)
// console.log(realDigits);
// }

// formatList()

// const [number, setNumber] = useState([)


// Declare a variable and store an
// integer value
var num = 235345
 
// Here we typecasting the num
// Splitting the num, so that
// we got an array of strings
// Then use map function to
// convert the array of strings
// into array of numbers
 
var myArr = String(list).split("").map((num)=>{
  return Number(num)
})
 
// console.log(myArr)



const calculateNumberFrequency = (list) => {

  const uniqueArray = Array.from(new Set(list)); 
  const maxNum = Math.max(...list);
  const minNum = Math.min(...list);
  const numbers = [];
  const frequency = [];

// All numbers from min(A) to max(A) saved in numbers array
  for (let i = minNum; i < maxNum + 1; i++) {
      numbers.push(i)
    }  

// Frequency of each number in the list saved in frequency array
  for (let i = 0; i < numbers.length; i++){
    let counter = 0
    for (let j = 0; j < list.length; j++){
      if(numbers[i] == list[j]){
          counter++
      }
    }
    frequency.push(counter)
  }


  setFreq(frequency)
  setNumb(numbers)

// return {
// Frequency: frequency,
// Number: numbers
// }

}

// calculateNumberFrequency(A)
// console.log(calculateNumberFrequency(A))




useEffect(() => {
  const myArr = String(list).split("").map((num)=>{
    return Number(num)
  })


  calculateNumberFrequency(myArr)

  


  
  }, [list]);




  console.log(numb)
  console.log(freq)


// const data = {
//   number: numb,
//   frequency: freq
// }


// useeffect

  return (
    <div className='numbers'>
        <div className='numberContainer'>
          <span>Enter numbers ex."1234567"</span>
          <input type='number' onChange={(e) => setList(e.target.value)}/>
          <span className='span'>Frequency: {freq}</span>
          <span className='span'>_Numbers: {numb}</span>
        </div>

        <Chart freq={freq} numb={numb}/>
    </div>
  )
}

export default Numbers