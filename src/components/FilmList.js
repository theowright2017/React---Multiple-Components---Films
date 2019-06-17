import React from 'react';
import Film from './Film';


const FilmList = (props) => {

  const commentNodes = props.data.map((film) => {
    return (
      <Film title={film.title} link={film.link}
      key={film.id} />
    )
  })

  console.dir(commentNodes)




  return(
    <div>
      {commentNodes}
    </div>
  )
}



export default FilmList;
