import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {


	return (
			<div>
				{
					robots.map((heroStats,i) => {
		return ( 
		<Card 
			key={i} 
			img={robots[i].img}
			icon={robots[i].icon}
			id={robots[i].id} 
			localized_name={robots[i].localized_name} 
			primary_attr={robots[i].primary_attr}
			username={robots[i].username}
			roles={robots[i].roles+''}

			attack_type={robots[i].attack_type}           
                name={robots[i].name}
                pro_win={robots[i].pro_win}
                pro_pick={robots[i].pro_pick}
                pro_ban={robots[i].pro_ban}


		/> 
		);

	}	)
		}	
			</div>

	);
}

export default CardList;
