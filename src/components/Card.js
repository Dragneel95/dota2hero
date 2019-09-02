import React from 'react';

const Card = ({localized_name, primary_attr,id,name, username, img,icon,roles,attack_type}) => {
	return (
		<div className= 'tc   dib  pa3 ma3 grow bw1 shadow-5 ba br2' style= {{background: 'rgba(253,151,79,0.3)'}}>
			<img  alt='robots' height="144" width="256" src={"https://api.opendota.com" + img/*`https://robohash.org/${id}?set=any`*/} />
			<div>
				<h2 >{localized_name} </h2>
				
				<h2 className= 'b ba '>{username}</h2>

				<h3> Primary attribute: <span>{primary_attr}</span> </h3>
				<h3> Type: <span>{attack_type}</span></h3>
				<h3> Roles: <span>{roles}</span> </h3>
				
			
			</div>

		</div>

	);
}

export default Card;

