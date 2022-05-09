import React, { useState } from 'react';


const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');
    const [ dateInput, setDateInput ] = useState('');

    //Vi använder oss av state även här för att spara undan användarens inputs. 
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleDateChange = (e) => {
        setDateInput(e.currentTarget.value)
    }

    //När det klickas på submit så kallar vi på vår funktion addTask och nollställer inputsen för nästa task.
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput, dateInput);
        setUserInput("");
        setDateInput("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task"/>
            <input value={dateInput} type="text" onChange={handleDateChange} placeholder="Enter date xxx-xx-xx"/>
            
            <button className='submitButton'>Submit</button>
        </form>
    );
};

export default ToDoForm;