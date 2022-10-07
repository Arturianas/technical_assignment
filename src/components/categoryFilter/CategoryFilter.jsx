import './categoryFilter.scss'
import Category from './filterComponents/category/Category'
import Dropdown from './filterComponents/dropdown/Dropdown'

const CategoryFilter = () => {



const carType = [
    // {
    //     carImg: 'https://content.r9cdn.net/rimg/carimages/generic/02_economy_white.png?width=108&height=72',
    //     type: 'All'
    // },
    {
        carImg: 'https://content.r9cdn.net/rimg/carimages/generic/01_mini_white.png?width=108&height=72',
        type: 'Small',
        startingPrice: 198 
    },
    {
        carImg: 'https://content.r9cdn.net/rimg/carimages/generic/02_economy_white.png?width=108&height=72',
        type: 'Medium',
        startingPrice: 250 
    },
    {
        carImg: 'https://content.r9cdn.net/rimg/carimages/generic/03_standard_white.png?width=108&height=72',
        type: 'Large',
        startingPrice: 398 
    },
    {
        carImg: 'https://content.r9cdn.net/rimg/carimages/generic/05_suv-small_white.png?width=108&height=72',
        type: 'SUV',
        startingPrice: 418 
    },  
    // {
    //     carImg: 'https://content.r9cdn.net/rimg/carimages/generic/03_standard_white.png?width=108&height=72',
    //     type: 'Van'
    // },
    

]


  return (
    <div className=''>
        <h1>KAYAK</h1>
        {/* <div>
            <span>Car type</span>
            <span>Reset</span>
        </div> */}
        <div className='categoryFilter'> 
        <div className='carType'>
            <span>Car type</span>
            {/* <span>Reset</span> */}
        </div>
            <div className='filter'>
                
                {carType.map(type => (
                    <Category type={type} />
                ))}
                
                <Dropdown/>
            </div>
        </div>
    </div>
  )
}

export default CategoryFilter