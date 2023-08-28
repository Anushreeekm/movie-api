import React from 'react'


function MovieItem(props) {
    const { title, voting, director, totalVoted, poster, language, genre, pageViews,  releasedDate, stars  } = props
    return (
        <div className="col-md-6 col-sm-12 mt-2 mb-2">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-2">
                            <i className="bi bi-arrow-up"></i>
                            <strong className="text-center"> {voting} </strong>
                            <i className="bi bi-arrow-down"></i>
                        </div>
                        <div className="col-md-4">
                            <img src={poster} alt="no imagr" className="card-img-top" />
                        </div>
                        <div className="col-md-6">
                            <h2> {title } </h2>
                            <h5> {genre} </h5>
                            <h5> {director} </h5>
                            <h5> {stars} </h5>
                            <h5> {language} | {releasedDate}</h5>
                            <h5 style={{color: "blue"}}>{pageViews} | Voted by {totalVoted} people </h5>  
                        </div>
                        <button className="btn btn-primary">Watch Trailer</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default MovieItem