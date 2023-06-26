import React from 'react';
import './Card.css';

interface ICard {
	name: string,
	email: string,
	id: number
}

const Card = ({ name, email, id }: ICard) => {
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="user" src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default Card;