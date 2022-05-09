
import React, { useState } from 'react';
import list from "./assets/list.json";
import './App.css';
import ToDoList  from './components/todoList.js';
import ToDoForm from './components/todoInput';



function App() {

  //Använder mig utav reacts state för att hålla koll på listan.
  const [ toDoList, setToDoList ] = useState(list);

  //Tar användarinput från todoInput.js och placerar in det i listan
  const addTask = (userInput, dateInput) => {
    let newTask = [...toDoList];
    newTask = [...newTask, { id: toDoList.length + 1, task: userInput, date: dateInput, complete: false }];
    setToDoList(newTask);
  }

  //Funktion som går in i listan utefter det id:t användaren klickar på. Ändrar det sparade värdet "complete" i arrayen.
  const handleToggle = (id) => {
    let toggleComplete = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(toggleComplete);
  }

  //Fungerar likt tidigare funktion, fast här raderas det id:t användaren har klickat på.
  const handleDelete = (id) => {
    console.log('clicked' + id);
    var afterDelete = toDoList.filter(x => {
        return x.id != id;
      })
      setToDoList(afterDelete);
  }

  //Funktion för att sortera våra tasks utefter datum. Detta är det första steget innan den filtreras i nästa funktion.
 function sortTasks() {
  return toDoList.sort((a,b) => {
    if (a.date > b.date) return 1;
    if (b.date > a.date) return -1; 
  });
}

  //Här kallas den tidigare funktionen och tillsammans sorteras listan utefter datum och sparas om.
  function sortDates() {  
  var newArray = sortTasks().filter(a => a.date);
  setToDoList(newArray);
  }

  //Samma princip som de två föregående, fast här utefter id.
  function sortTasksId() {
    return toDoList.sort((a,b) => {
      if (a.id > b.id) return 1;
      if (b.id > a.id) return -1; 
    });
  }

  //Samma som ovan.
  function sortId() {  
    var newArrayId = sortTasksId().filter(a => a.id);
      console.log(newArrayId);
      console.log('Run');
      setToDoList(newArrayId);
    }

  //Funktionen som kollar vilka datum som har passerat dagens datum. Vi sparar dagens datum som en variabel, som sedan jämförs
  //med datumet på vår task. Detta gör jag via en loop som kollar igenom alla objekt i arrayen.
  function checkingDates() {
    var dateChecker = toDoList;
    var today = new Date().toISOString().split("T")[0];
    for(let i = 0; i < dateChecker.length; i++) {
      if(dateChecker[i].date < today ) {
        var passedTask = document.getElementById(dateChecker[i].id);

        passedTask.style.color = 'red';
      }
      if(dateChecker[i].date > today) {
        var currentTask = document.getElementById(dateChecker[i].id);
        currentTask.style.color = 'black';
      }
    }
  }

  return (
    <div className="App">
     <h1>Niklas To Do-list</h1>
     <hr id='h1Line'/>
     <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleDelete={handleDelete}/>
     <ToDoForm addTask={addTask} />
     <button className='sort' onClick={sortDates}>Sort list by date</button>
     <button className='sort' onClick={sortId}>Sort list by id</button>
     <button className='checkDateButton'onClick={checkingDates}>Check dates</button>
     
    </div>
    
  );
}

export default App;
