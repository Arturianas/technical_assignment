import { useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import './dropdown.scss'


import {addCarType, removeCarType, resetTypes} from '../../../../context/typesActions'
import {TypesContext} from '../../../../context/typesContext'



const dropdownItems = [
  {
    carImg: 'https://content.r9cdn.net/rimg/carimages/generic/12_truck_white.png?width=108&height=72',
    type: 'Pickup Truck',
    price: 475
},
{
    carImg: 'https://content.r9cdn.net/rimg/carimages/generic/04_premium.png?width=108&height=72',
    type: 'Luxury',
    price: 634
},
{
  carImg: 'https://content.r9cdn.net/rimg/carimages/generic/02_economy_white.png?width=108&height=72',
  type: 'Convertible',
  price: 634
},
{
  carImg: 'https://content.r9cdn.net/rimg/carimages/generic/02_economy_white.png?width=108&height=72',
  type: 'Commercial',
  price: 634
},
]



const Dropdown = () => {


  const {selectedTypes, dispatch} = useContext(TypesContext)
  

  const [isOpen, setIsOpen] = useState(false)

  const [selectedCars, setSelectedCars] = useState([]);


  const handleSelect = (e, position) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedCars(
      checked
        ? [...selectedCars, value]
        : selectedCars.filter((item) => item !== value)
    );


    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };


  const [checkedState, setCheckedState] = useState(
    new Array(dropdownItems.length).fill(false)
  );

  // const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    // setCheckedState(updatedCheckedState);

    // const totalPrice = updatedCheckedState.reduce(
    //   (sum, currentState, index) => {
    //     if (currentState === true) {
    //       return sum + toppings[index].price;
    //     }
    //     return sum;
    //   },
    //   0
    // );

    // setTotal(totalPrice);
  };

  // const [open, setOpen] = useState(false);

  let moreDropdown = useRef();

  useEffect(() => {
    let handler = (e)=>{
      // e.preventDefault()
      if(!moreDropdown.current.contains(e.target)){
        setIsOpen(false);
        // console.log(moreDropdown.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  }, []);

  console.log(selectedCars)



  const resetDropdown = (e) => {
    e.preventDefault()
    setSelectedCars([])
    setCheckedState(
      new Array(dropdownItems.length).fill(false)
    )
    
  }


  const resetAll = (e) => {
    e.preventDefault()
   
    resetDropdown(e)

    dispatch(resetTypes())
    
  }


  return (
    // <div className='dropdown'>
    //     <div className='dropContent'>
    //         <span className='dropMore'>More</span>
    //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow">
    //              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    //         </svg>
    //     </div>

    // </div>

    <div className='dropContainer' ref={moreDropdown}>

      {/* <span onClick={(e) => resetAll(e)} className='reset'>Reset</span> */}
      {(selectedCars.length >= 1 || selectedTypes.length >= 1) && <span onClick={(e) => resetAll(e)} className='reset'>Reset</span>}

        <div onClick={() => setIsOpen(!isOpen)} className={`dropdown ${(isOpen || selectedCars.length >= 1) && 'clicked'} ${selectedCars.length >= 1 && 'clickedSelect'}`} >
        <div className={`dropContent ${(isOpen || selectedCars.length >= 1) && 'catNameWhite'}`}>
            {/* <span className='dropMore'>More</span> */}


          <div className='moreText'>
            <span className='dropMore'>More</span>
            {selectedCars.length > 0 && (
              <span className='dropMore'>{selectedCars.length === 1 ? selectedCars[0] : `${selectedCars.length} selected`}</span>
            )}
            {/* <span className='dropMore'>Pickup truck</span> */}
          </div>

            {(isOpen || selectedCars.length >= 1)? (
              <>
                {selectedCars.length >= 1 ? (
                <svg onClick={resetDropdown} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>

              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
              )}
              </>
              
            
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            )}
            
        </div>

        </div>





        {isOpen && (
          <div className='dropSelected' >
          {/* <div className='contentInsideDropdown'>
              content
          </div> */}
           <ul className="toppings-list">
      {dropdownItems.map(({ type, price, carImg }, index) => {
        return (
          <li key={index}>
            <div className="dropdownItems">
              <div className=" flex">
                <input
                  // type="checkbox"
                  id={type}
                  // name={type}
                  // value={type}
                  checked={checkedState[index]}
                  // onChange={() => handleOnChange(index)}

                  type="checkbox"
                    value={type}
                    onChange={(e) => handleSelect(e, index)}
                />
                <label className='flex no-margin-right' htmlFor={type}>
                  <img src={carImg} alt={type} className='dropdownImg'/>
                  <div className='dropdownDetails'>
                    <span>{type}</span>
                    <span className='dropdownPrice'>${price}</span>
                  </div>
                </label>

                  {/* <label>{type}</label>
                  <input
                    type="checkbox"
                    value={type}
                    onChange={handleSelect}
                    // disabled={!isAvailable(roomNumber)}
                  /> */}
              </div>
              {/* <div className="right-section">{getFormattedPrice(price)}</div> */}
            </div>
          </li>
        );
      })}
      
    </ul>
      </div>
        )}
    </div>
  )
}

export default Dropdown