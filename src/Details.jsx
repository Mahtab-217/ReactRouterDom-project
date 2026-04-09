import { useParams } from "react-router-dom"
import { StList } from "../public/db"

export default function Details(){
    const {id}= useParams();
   const data= StList.find(item => item.id==id);
    return (
        <div>
          
            <h1>Name: {data.name}</h1>
            <h2>Last Name: {data.LastName}</h2>
            <h3>Score: {data.score}</h3>
            <h4>Grade: {data.grade}</h4>
            <h4>Details: {data.details}</h4>
        </div>
    )
}