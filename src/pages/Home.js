import React, { useEffect, useState } from 'react';
import MovieItem from './MovieItem';
import CompanyInfo from '../component/companyInfo';

const Home = () => {
  const [postData, setPostData] = useState({
    category: 'movies',
    language: 'kannada',
    genre: 'all',
    sort: 'voting',
  });

  const [movies,setMovies] = useState([])

  const searchHanlder = async () => {
    
    const url = 'https://hoblist.com/api/movieList'; 


    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data.result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

    useEffect(() => {
        searchHanlder()
    },[])




  return (
    <>
    <section className="bg-image">
        <CompanyInfo />
    </section>
    <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">Movie List</h3>
                </div>
            </div>

            <div className="row">
                {
                    movies && movies.map((item,index) => {
                        return (
                            <MovieItem key={index} {...item} />
                        )
                    })
                }
            </div>
        </div>
    </>
  )
};

export default Home;
