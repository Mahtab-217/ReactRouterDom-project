import { useEffect, useState } from "react"

export default function(){
    let [qimat,setqimat]=useState(0);
    useEffect(greet, [qimat]);
    let [list, setList]=useState([]); 
    function greet(){
        console.log("The value changed")
    }
    return(
        <div>
            {list.length ===0 &&(
                <div>
                    <h1>No user exists</h1>
                </div>
            )}
            {/* <h1 className="text-5xl text-center">
                {qimat}
            </h1>
            <button className="py-2 px-5 bg-orange-600 rounded-md" onClick={()=>setqimat(qimat+1)}>Add Number </button>
            <hr />
            <button className="bg-orange-700 jutify-center py-2 px-5" onClick={()=>setqimat(qimat+1)}></button> */}
        </div>
    )
}