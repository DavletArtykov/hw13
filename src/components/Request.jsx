import { useEffect, useState } from "react";
import "./Request.css";

export const Request = () => {
  const [photots, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10") 
      .then((result) => {
        return result.json();
      })
      .then((data) => setPhotos(data));
  }, []);


  return (
    <div className="request-cheif">
      {photots.map((elem) => {
        return (
          <div className="request" key={elem.id}>
            <h1>Title: {elem.title}</h1>
            <span>{elem.id}</span>
            <h3>Text</h3>
            <img src={elem.thumbnailUrl} alt={elem.thumbnailUrl} />
          </div>
        );
      })}
    </div>
  );
};
