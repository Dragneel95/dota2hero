import React from 'react';


const SearchBox = ({searchChange}) => {

	return (
		<div className= 'pa2 '>
			<input 
			className= 'pa3 ba br2  bg-washed-green' 
			type='search' 
			placeholder='Search Heroes'
			
			onChange={searchChange}
			/>
		</div>
		)
}

export default SearchBox;