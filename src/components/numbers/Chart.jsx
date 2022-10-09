import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = ({numb, freq}) => {


// const data = [
//  {
//     number: numb[0],
//     frequency: freq[0]
//  },
//  {
//     number: numb[1],
//     frequency: freq[1]
//  },
//  {
//     number: numb[2],
//     frequency: freq[2]
//  },
//  {
//     number: numb[3],
//     frequency: freq[3]
//  },
//  {
//     number: numb[4],
//     frequency: freq[4]
//  }
// ]


const data = [];

numb.forEach((element, index) => {

data.push({
    number: element,
    frequency: freq[index]
})
});


console.log(data);



  return (


        <div>
           <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="number" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="frequency" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
        </div>
    
  )
}

export default Chart