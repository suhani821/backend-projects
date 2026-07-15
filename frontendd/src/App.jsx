import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
  const [data, setdata] = useState([])

  useEffect(() => {
    axios.get("/jokes").then((response) => {
      console.log(response.data);
      setdata(response.data);
    }).catch((error)=>{
      console.log({error});
    })
  },[] 
)
  return (

    <>
      <h1>  jokes  </h1>
      <h1>{data.length}</h1>
      {
        data.map((data) => {
        
         return(<div key={data.id} >
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div>
        ) ;

      })
      }
      
    </>
  );
}
export default App;
