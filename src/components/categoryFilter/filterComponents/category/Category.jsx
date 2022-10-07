import './category.scss'
import { useState } from 'react'

const Category = ({type}) => {

const [clicked, setClicked] = useState(false)

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
      <div onClick={() => setClicked(!clicked)} className={`category ${clicked && 'clicked'}`}>
          <div className='catContent'>
              <img alt={type.type} src={type.carImg}/>
              <div className={`catName ${clicked && 'catNameWhite'}`}>
                  {type.type}
              </div>
              
          </div>
      </div>
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