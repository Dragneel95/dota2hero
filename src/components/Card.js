import React from 'react';

const Card = ({localized_name, email,id, username, url_full_portrait}) => {
	return (
		<div className= 'tc   dib  pa3 ma3 grow bw1 shadow-5' style= {{height:'300px', weight:'300px', background: 'rgba(126,18,18,0.4)'}}>
			<img  alt='robots' src={url_full_portrait/*`https://robohash.org/${id}?set=any`*/} />
			<div>
				<h2 >{localized_name} </h2>
				
				<h2 className= 'b ba '>{username}</h2>

				<p> {email} </p>
			</div>

		</div>

	);
}

export default Card;