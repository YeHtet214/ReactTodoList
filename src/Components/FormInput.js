import React, { useState } from 'react';

export const FormInput = ({openForm, setOpenForm, setTasks}) => {

    const [taskName, setTaskName] = useState('');
    const [taskDesp, setTaskDesp] = useState('');

    const addNewTask = () => {
        if (!taskName) return;
        setTasks(tasks => tasks.push({taskName, taskDesp}));
    }

    const addSubmit = (e) => {
        e.preventDefault();
        addNewTask(); 
        setOpenForm(false);
    }

    return (
        <div className={openForm ? 'open form-wrapper' : 'form-wrapper'}>
            <form >
                <input type='text' id='task-name' onChange={(e) => setTaskName(e.target.value)} />
                <input type='text' id='task-description' onChange={(e) => setTaskDesp(e.target.value)} />
                <button type="submit" id="add-submit" onClick={(e) => addSubmit(e)} >Add</button>
            </form>
        </div>
    )
}