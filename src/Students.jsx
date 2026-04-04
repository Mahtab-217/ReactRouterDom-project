import { Link } from "react-router-dom";
import Nav from "./Nav";

const Student = ()=>{
const StList=[
    {
        id:1,
        name:"Ali",
        LastName:"Alizada",
        score:90,
        grade:12,
        details: "He is a great studetn"
    },
    {
        id:2,
        name:"Ahmad",
        LastName:"Rahmati",
        score:99,
        grade:10,
        details: "He is a great studetn"
    },
    {
        id:3,
        name:"Khalid",
        LastName:"Naqawi",
        score:80,
        grade:8,
        details: "He is a great studetn"
    },
]
    return (
        <div>
            <Nav/>
            <ol>
               <li style={
                {listStyleType:"none" }
               }>
                {StList.map(person=>(
                <Link style={{ 
                    color:"black",
                    textDecoration:"none"
                }} to="">{person.name}</Link>
               ))}
               </li>
            </ol>
        </div>
    )
}
export default Student;