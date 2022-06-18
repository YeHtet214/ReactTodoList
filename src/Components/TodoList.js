import React from 'react';
import ReactDOM from 'react-dom';

import { Task } from './Task';

const styles = {
	height: '75vh',
	padding: '1em',
	'overflowY': 'scroll',
	'scrollbarWidth': 'none'
}

const TodoLists = ({ tasks }) => {
	return (
		<div style={styles}>
			<ul className="tasks-list">
				{
					// tasks?.map((task, i) => (
					// 	<Task key={i} task={task} />
					// ))
					console.log(tasks)
				}
			</ul>
		</div>		
	)
}

export default TodoLists;