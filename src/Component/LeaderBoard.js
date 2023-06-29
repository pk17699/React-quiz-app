import React from 'react';
import { response } from '../response';
import Leaders from './Leaders';
import { Link, useLocation } from "react-router-dom";
import Sort from '../CustomHooks/Sort';

function LeaderBoard(props) {
  const location = useLocation();
  console.log(location.pathname);
  let list = Sort(response.list, location.pathname);

	return (
		<div className="text-center mt-50">
			<div>
				<div>
					<Link to="/rank"><button data-testid="route-rank" className='outlined' type="button">Rank</button></Link>
					<Link to="/name"><button data-testid="route-name" className='outlined' type="button">Name</button></Link>
					<Link to="/points"><button data-testid="route-points" className='outlined' type="button">Points</button></Link>
					<Link to="age"><button data-testid="route-age" className='outlined' type="button">Age</button></Link>
				</div>
			</div>
			<div className="card mx-auto pb-20 mb-30" style={{ width: '50%' }}>
				<table className="mt-50" data-testid="app-table">
					<thead>
						<tr>
							<th>Rank</th>
							<th>Name</th>
							<th className="numeric">Points</th>
							<th className="numeric">Age</th>
						</tr>
					</thead>
					{
            list.map((res, index) => <Leaders key={index} res={res} index={index} />)
          }
				</table>
			</div>
		</div>
	);
}

export default LeaderBoard;
