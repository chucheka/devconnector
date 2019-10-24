import React from 'react';
import User from '../../img/user.png';
export default function Comment() {
	return (
		<div>
			<div>
				<img src={User} width="130px" height="130px" />
				<br />
				<span>John Doe</span>
			</div>
			<div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repellendus iste, possimus quas
					voluptatum at assumenda voluptatem ullam laudantium cupiditate officia neque dignissimos nisi
					voluptatibus soluta illum temporibus adipisci enim.
				</p>
				<div>
					<span>likes</span>
					<span>unlikes</span>
				</div>
			</div>
		</div>
	);
}
