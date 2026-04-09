import { useState } from "react"

export default function(){
    const [qimat,setqimat]=useState(0);
    
    return(
        <div>
            <h1 className="text-5xl text-center">
                0
            </h1>
            <p className="
            font-bold text-2xl font-bold
            ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores magni eligendi ullam exercitationem sed similique! Distinctio neque dolorem consequuntur magnam. Quos similique ratione quidem reprehenderit dolorum recusandae molestias, at repellat.</p>
            <hr />
            <button className="bg-orange-700 jutify-center py-2 px-5" onClick={()=>setqimat(qimat+1)}></button>
        </div>
    )
}