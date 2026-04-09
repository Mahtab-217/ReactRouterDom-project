import { useState } from "react"

export default function(){
    const [qimat,setqimat]=useState(0);
    
    return(
        <div>
            <h1 className="text-5xl">
                0
            </h1>
            <hr />
            <button className="bg-orange-700 py-2 px-5" onClick={()=>setqimat(qimat+1)}></button>
        </div>
    )
}