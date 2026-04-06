import { Link } from "react-router-dom";
import Nav from "./Nav";
import { StList } from "../public/db";
const Student = ()=>{

    return (
        <div>
            <Nav/>
            <ol>
               {StList.map((person)=>(
                <li key={person.id}
                style={{listStyleType:"none",
                    margin:"12px",
                    textDecoration:"underline",

                }}
                >
                    <Link style={{
                        color:"black",
                        fontSize:"32px",
                        textDecoration:"none",
                    }} to=""/>
                    {person.name}

                </li>
               )
               )}
            </ol>
        </div>
    )
}
export default Student;