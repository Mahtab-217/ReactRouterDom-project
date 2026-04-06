import { useParams } from "react-router-dom"
import { schoolsList } from "../public/db"
export default function SchoolDetails(){
const {id}=useParams();
const data=schoolsList.find(x=> x.id==id);
    return (
        <div>
            <h1>This is the details page of schools</h1>
            <h1>School Name: {data.name}</h1>
            <h2>Manager Name: {data.manager}</h2>
            <h2>Details: {data.details}</h2>
        </div>
    )
}