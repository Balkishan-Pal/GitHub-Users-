import React from 'react';

const Profile = ({ list }) => {
	return (
		<div className='Profiles'>
			{list.map(({ id, img, name }) => (
				<div key={id}>
				<img src={img} alt={name} />
					<h3>{name}</h3>
				</div>
			))}
		</div>
	);
};

export default Profile;