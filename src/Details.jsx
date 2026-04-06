import { StList } from "../public/db"
export default function Details(){
    StList.find(item=> item.id==id)
    return (
        <div>
            <h1>Name: </h1>
            <h2>Last Name:</h2>
            <h3>Score:</h3>
            <h4>Grade: </h4>
            <h4>Details: </h4>
        </div>
    )
}