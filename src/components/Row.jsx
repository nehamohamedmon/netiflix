import { wait } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react'
import instance from '../instance';
import "./Row.css"
function Row({title, fetchUrl , isPoster}) {
 /* console.log(fetchUrl);*/
 const [allMovie , setAllMovies] = useState()
 const base_url = "https://image.tmdb.org/t/p/original/";

  const fetchData = async ()=>{
      const {data} = await instance.get(fetchUrl)
        /* const {results} =data */
      setAllMovies(data.results);
  }
  console.log(allMovie);

 useEffect(()=>{
  fetchData()
 }, [])

  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className="movie-row">
          {
            allMovie?.map(item=>(
              <img className='movie' src={`${base_url}${isPoster?item.poster_path:item.backdrop_path}`} alt="no-images" />
            ))
          }
      </div>
    </div>
  )
}

export default Row