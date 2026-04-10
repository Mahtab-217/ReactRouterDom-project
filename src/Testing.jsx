import { useEffect, useState } from "react"

export default function(){
    let [qimat,setqimat]=useState(0);
    useEffect(greet, [qimat]);
    let [list, setList]=useState([]); 
    useEffect(()=>{
        async function getData(){
            const data= await fetch("https://jsonplaceholder.typicode.com/users");
            const jsonData=await data.json();
            setList(jsonData);
        }
        getData();
    },[list]);
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
            {list.length>0&&(
                <div>
                    <table className="border w-full">
                        <tr>
                            <th className="border py-1 px-3 text-center">Name</th>
                            <th className="border py-1 px-3 text-center">Email</th>
                            <th className="border py-1 px-3 text-center">Phone</th>
                        </tr>
                       {list.map(user=>(
                        <tr>
                            <td className="border py-1 px-3 text-center">{user.name}</td>
                            <td className="border py-1 px-3 text-center">{user.email}</td>
                            <td className="border py-1 px-3 text-center">{user.phone}</td>
                        </tr>
                       ))}
                    </table>
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