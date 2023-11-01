// import React, { useEffect, useState } from 'react'

// export default function Products() {

//     const [product, setProduct] = useState([])
//     const fetchData = () => {
//         fetch("https://fakestoreapi.com/products")
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//                 setProduct(data)
//             })
//     }
// }

// // useEffect(()=>{
// //  fetchData()
// // },[])


// return (<div>{
//     product.map((oo) => {
//         return (<div>
//             <h1>{oo.title}</h1>
//         </div>)
//     })
// }</div>)
import React, { useEffect, useState } from 'react'

export default function Products() {
    const[pro,setPro]=useState([])
    const fetchdata=()=>{
         fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setPro(data)
        })
    }
    useEffect(()=>{
        fetchdata()
    },[])
  return (
    <div>
     {
        pro.map((val)=>{
            return (<div>
                <h1>{val.title}</h1>
                <h1>{val.id}</h1>
                <img src={val.image}/>
            </div>)
        })
     }
    </div>
  )
}

