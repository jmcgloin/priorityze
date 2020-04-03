import React, { useState } from 'react';

import GoalCard from '../containers/GoalCard';
import StepList from '../containers/StepList';

const Card = ({ goal }) => {
	const [count, setCount] = useState(0)
	return (
		<div className="flex flex-row card">
			<GoalCard 
				goal={ goal }
				id={ goal.id || null }
			/>
			{ goal.id ? <StepList
				steps={ goal.steps }
				goalId={ goal.id }
				/> : null
			}
			<p>Kids priority: { count }</p>
			<button onClick={ () => setCount(count + 1) }>More important</button>
		</div>
	)
}

export default Card

//useEffecf ??
// import React, { useState } from 'react';

// function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }