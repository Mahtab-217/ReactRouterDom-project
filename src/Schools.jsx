import { Link } from "react-router-dom"
import { schoolsList } from "../public/db"
export default function Schools(){
    return (
        <div>
            <h1>These are the lists of nearby schools</h1>
            <ul>
                {schoolsList.map((s)=>(    
                    <Link key={s.id} to="">{s.name}</Link>
                   
                ))}
            </ul>
        </div>
    )
}