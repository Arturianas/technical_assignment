import './category.scss'
import { useState } from 'react'
import { useContext } from 'react'
import {TypesContext} from '../../../../context/typesContext'
import { useEffect } from 'react'

import {addCarType, removeCarType, resetTypes} from '../../../../context/typesActions'

const Category = ({type}) => {

const [clicked, setClicked] = useState(false)


const {selectedTypes, dispatch} = useContext(TypesContext)

console.log(selectedTypes)


// const [isClicked, setiskClicked] = useState(false)


useEffect(() => {
  
if (selectedTypes.includes(type.type)) {
  setClicked(true)
} else {
  setClicked(false)
}

}, [selectedTypes, type.type]);

console.log(clicked);
console.log(selectedTypes)

  return (
    // <div onClick={() => setClicked(!clicked)} className={`category ${clicked && 'clicked'}`}>
    //     <div className='catContent'>
    //         <img alt={type.type} src={type.carImg}/>
    //         <div className={`catName ${clicked && 'catNameWhite'}`}>
    //              {type.type}
    //         </div>
    //         {/* {clicked && 'click'} */}
    //     </div>
    // </div>

    <div className='catAndToolip'>
      {/* <div title='tooltip' className='tooltip'>
        <span className='tooltiptext'>$155+</span>
      </div> */}
      <span data-tooltip={`$${type.startingPrice}+`} data-flow="top">
      {/* <div onClick={() => setClicked(!clicked)} className={`category ${clicked && 'clicked'}`}> */}
      {/* <div onClick={() => dispatch({type: "ADD_CAR_TYPE", payload: type.type})} className={`category ${clicked && 'clicked'}`}> */}
      {/* <div onClick={() => dispatch({type: "ADD_CAR_TYPE", payload: type.type})} className={`category ${clicked && 'clicked'}`}>
          <div className='catContent'>
              <img alt={type.type} src={type.carImg}/>
              <div className={`catName ${clicked && 'catNameWhite'}`}>
                  {type.type}
              </div>
              
          </div>
      </div> */}




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

      {/* <div onClick={() => setClicked(!clicked)} className={`category ${clicked && 'clicked'}`}>
          <div className='catContent'>
              <img alt={type.type} src={type.carImg}/>
              <div className={`catName ${clicked && 'catNameWhite'}`}>
                  {type.type}
              </div>
              
          </div>
      </div> */}
    </div>
  )
}

export default Category