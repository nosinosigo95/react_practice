import React from "react";

export default function ForList({src}){
  return(
    <dl>
      {
        src.map(elem => (
         <React.Fragment key={elem.ibsn}>
          <dt>
            <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
              {elem.title}
            </a>
          </dt>
         </React.Fragment> 
        ))
      }
    </dl>
  );
}
