import { useEffect, useState } from "react"

export default function(){
    const [qimat,setqimat]=useState(0);
    useEffect(greet, [qimat]);
    function greet(){
        console.log("Hello")
    }
    return(
        <div>
            <h1 className="text-5xl text-center">
                {qimat}
            </h1>
            <button className="py-2 px-5 bg-orange-600 rounded-md" onClick={()=>setqimat(qimat+1)}>Add Number </button>
            <hr />
            <button className="bg-orange-700 jutify-center py-2 px-5" onClick={()=>setqimat(qimat+1)}></button>
        </div>
    )
}