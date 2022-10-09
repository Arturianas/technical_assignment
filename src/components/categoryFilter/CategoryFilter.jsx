import './categoryFilter.scss'
import Category from './filterComponents/category/Category'
import Dropdown from './filterComponents/dropdown/Dropdown'



const CategoryFilter = () => {

const carType = [
    // {
    //     carImg: 'https://content.r9cdn.net/rimg/carimages/generic/02_economy_white.png?width=108&height=72',
    //     type: 'All',
    // id: 5
    // },
    {
        carImg: 'https://content.r9cdn.net/rimg/carimages/generic/01_mini_white.png?width=108&height=72',
        type: 'Small',
        startingPrice: 198,
        id: 1
    },
    {
        carImg: 'https://content.r9cdn.net/rimg/carimages/generic/02_economy_white.png?width=108&height=72',
        type: 'Medium',
        startingPrice: 250,
        id: 2
    },
    {
        carImg: 'https://content.r9cdn.net/rimg/carimages/generic/03_standard_white.png?width=108&height=72',
        type: 'Large',
        startingPrice: 398,
        id: 3
    },
    {
        carImg: 'https://content.r9cdn.net/rimg/carimages/generic/05_suv-small_white.png?width=108&height=72',
        type: 'SUV',
        startingPrice: 418,
        id: 4 
    },  
    // {
    //     carImg: 'https://content.r9cdn.net/rimg/carimages/generic/03_standard_white.png?width=108&height=72',
    //     type: 'Van',
    // id: 6
    // },
    

]


  return (
    <div className=''>
        <h1>KAYAK</h1>
        <div className='categoryFilter'> 
            <div className='carType'>
                <span>Car type</span>
            </div>
            <div className='filter'> 
                {carType.map(type => (
                    <Category key={type.id} type={type} />
                ))}
                <Dropdown/>
            </div>
        </div>
    </div>
  )
}

export default CategoryFilter