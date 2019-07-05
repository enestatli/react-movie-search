import React from 'react'
import { Link } from 'react-router-dom'

import './MovieThumb.css'

const MovieThumb = ({image, movieId, movieName, clickable}) => {
	return (
		<div className="rmdb-moviethumb">
			{clickable ? 
				<Link to={{pathname:`/${movieId}`, movieName:`/${movieName}`}}>
					<img src={image} alt="moviethumb" /> 
				</Link>
				:
				<img src={image} alt="moviethumb" />
			}
		</div>
	)
}

export default MovieThumb