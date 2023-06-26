import React from 'react';
// @ts-ignore
import Card from './Card.tsx';

interface IRobot {
	name: string,
	email: string,
	id: number
}

interface ICardList {
	robots: Array<IRobot>
}

const CardList = ({robots}: ICardList) => {
	return (
		<div>
			{
				robots.map((robot: IRobot) => {
					return <Card name={robot.name} email={robot.email} id={robot.id} key={robot.id} />
				})
			}
		</div>
	) 
}

export default CardList;