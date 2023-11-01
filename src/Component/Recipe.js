// import React, { useEffect, useState } from 'react'

// export default function Recipe() {
//   const[recipe,setRecipe]=useState([])
//   const[input,setInput]=useState("")
//     const fetchData = () => {
//         fetch("https://api.edamam.com/search?q=chicken&app_id=ce5f04e6&app_key=9e1b9af144451310701d68a13e2b67f6&from=0&to=3&calories=591-722&health=alcohol-free")
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             setRecipe(data.hits)
//         })
// }


//     useEffect(() => {
//       fetchData()
//     },[input])

//     return(
//       <div>
//         <input onChange={(e) => setInput(e.target.value)} placeholder="Enter something"/>
//         {
//           (recipe.length) ? recipe.map((val)=>{
//             return(
//               <div>
//                 <img src={val.recipe.image}/>
//                 </div>

//             )
//           }): <h1>Not found</h1>
//         }
//       </div>
//           )

//         }
import React, { useEffect, useState } from 'react'

export default function Recipe() {
  const [recipe, setRecipe] = useState([]);
  const[item,setItem]=useState([])
  const fetchdata = () => {
    fetch(`https://api.edamam.com/search?q=${item}&app_id=ce5f04e6&app_key=9e1b9af144451310701d68a13e2b67f6&from=0&to=30&calories=591-722&health=alcohol-free`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setRecipe(data.hits)
      })
  }
  useEffect(() => {
    fetchdata()
  }, [item])
  return (<div><div><input type="text" placeholder="Search data here " onChange={(e)=>setItem(e.target.value)}/></div>
    <div>
      {
        recipe.map((val) => {
          return (<div>
            <h1>{val.recipe.title}</h1>
            <img src={val.recipe.image} />
          </div>)
        })
      }
    </div>
  </div>)
}



