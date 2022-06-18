import React from 'react';
import ReactDOM from 'react-dom';

export const Task = ({ task }) => {
	const name = 'Task name is: ' + task.taskName;
	const description = 'Task Description is: ' + task.taskDesp;

	return (
		<li><b>{name}</b><em>{description}</em></li>
	)
}