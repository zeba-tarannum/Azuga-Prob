import React,{ useState} from "react"
import dataarr from "./data"
import { useHistory } from "react-router-dom";


export default function Search(){
    let history = useHistory();
    console.log(history)
    const [name,setName]=useState('')
    const [dataA,setData]=useState([])
    const [submit,setSubmit]=useState(false)
  

    const fetchData=()=>{
        let data=[...dataA]
     dataarr.map(s=>{
   
        if(s.name.toLowerCase().includes(name.toLowerCase())){
      
                data.push(s)
     }
 return 1
    })
 setData(data)
 setSubmit(true)
    console.log(data)
}

const newest=()=>{
    let data=[...dataA]
    data.sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
      });
      setData(data)
   
}

const top=()=>{
    let data=[...dataA]
    data.sort((a, b) => b.upvotes - a.upvotes)
    setData(data)
}
    return(
        <>
         
          <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="input1"/>
         <button disabled={name.length<3} onClick={fetchData}>Fetch</button>
         {dataA.length?
         <>
         <button onClick={newest} className="button">Newest</button>
         <button onClick={top}>Top</button>
         <p>Click on the title name to read the contents</p>
         <table className="center">
         <tr>
           <th>ArticleId</th>
           <th>Name</th>
           <th>Title</th>
           <th>Upvotes</th>
           <th>Date</th>
         </tr>
         {dataA.map((i)=>
            (
                <tr>
                <td >{i.articleId}</td>
                <td>{i.name}</td>
                <td onClick={()=>history.push({pathname:"/desc",state:[i]})} className="title">{i.title}</td>
            
                <td>{i.upvotes}</td>
                <td>{i.date}</td>
              </tr>
            ))}
        
         
       </table>
       </>
       :submit&&dataA?(<h3>No Results found</h3>):null}
     
        </>
    )
} 