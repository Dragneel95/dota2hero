import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {


	return (
			<div>
				{
					robots.map((user,i) => {
		return ( 
		<Card 
			key={i} 
			url_full_portrait={robots[i].url_full_portrait}
			id={robots[i].id} 
			localized_name={robots[i].localized_name} 
			email={robots[i].email}
			username={robots[i].username}

		/> 
		);

	}	)
		}	
			</div>

	);
}

export default CardList;
