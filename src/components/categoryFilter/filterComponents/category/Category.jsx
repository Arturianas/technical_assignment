import './category.scss'
import { useState } from 'react'
import { useContext } from 'react'
import {TypesContext} from '../../../../context/typesContext'
import { useEffect } from 'react'
import {addCarType, removeCarType} from '../../../../context/typesActions'



const Category = ({type}) => {

const [clicked, setClicked] = useState(false)
const {selectedTypes, dispatch} = useContext(TypesContext)


// Check if specific component is clicked
useEffect(() => {
  
if (selectedTypes.includes(type.type)) {
    setClicked(true)
  } else {
    setClicked(false)
  }
}, [selectedTypes, type.type]);



  return (
    <div className='catAndToolip'>
      <span data-tooltip={`$${type.startingPrice}+`} data-flow="top">
        {clicked ? (
          <div onClick={() => dispatch(removeCarType(type.type))} className={`category ${clicked && 'clicked'}`}>
            <div className='catContent'>
                <img alt={type.type} src={type.carImg}/>
                <div className={`catName ${clicked && 'catNameWhite'}`}>
                    {type.type}
                </div>
            </div>
          </div>
        ) : (
          <div onClick={() => dispatch(addCarType(type.type))} className={`category ${clicked && 'clicked'}`}>
            <div className='catContent'>
                <img alt={type.type} src={type.carImg}/>
                <div className={`catName ${clicked && 'catNameWhite'}`}>
                    {type.type}
                </div>
            </div>
          </div>
        )}
      </span>
    </div>
  )
}

export default Category