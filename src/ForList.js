import React from "react";

export default function ForList({src}){
  return(
    <dl>
      {
        src.map(elem => (
         <>
          <dt>
            <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
              {elem.title}
            </a>
          </dt>
         </> 
        ))
      }
    </dl>
  );
}
