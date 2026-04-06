import { Link } from "react-router-dom"



export default function Nav(){
    const list=[
        {
            link: "/",
            name: "Home Page"
        },
        {
            link: "/about",
            name: "About Page"
        },
        {
            link: "/contact",
            name: "Contact Page"
        },
    ];
    return (
       <nav>
        <h3>Logo</h3>
        <ul>
           
           {list.map((item)=>(
                <li key={list.link }>
               <Link to={item.link}>{item.name}</Link>
                </li>
            ))}
        </ul>
       </nav>
    )
}