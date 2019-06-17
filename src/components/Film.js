import React from 'react';



const Film = (props) => {


  return (
    <div>
      <li><a href={props.link}>{props.title}</a></li>
    </div>
  );
}



export default Film;
