import { useEffect, useState } from "react"
import './Request.css'


export const Request = () =>{

    const [isPhotots, setIsPhotos]= useState([])

         useEffect( () => {
            fetch('https://jsonplaceholder.typicode.com/photos?limit=10')
            .then((result)=>{
                return result.json()
            }).then((data)=> setIsPhotos(data))

        },[] )


    return(
        <div className="request-cheif" >
         
                {isPhotots.map((elem) => {

                    return <div className="request"  key={elem.id} >
                        <h1> Title: {elem.title}</h1>
                        <span>{elem.id}</span>
                        <h3>Text</h3>
                        <img src={elem.thumbnailUrl} alt="Photo" />
                        </div>
                          
                     

                })}
               
               
        
        </div>
    )
} 