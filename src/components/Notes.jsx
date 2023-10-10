import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import Note from '../components/Note'

const Notes = ({ tab, notes}) => {
  const { data, setAction } = useContext(DataContext);

  const onDragOver = (e) => {
    e.preventDefault();
  }

  const onDrop = (e, status) => {
    let id = e.dataTransfer.getData("id");

    let newData = [...data];

    let selectedIndex = newData.findIndex((item) => item.id === id);

    if (selectedIndex !== -1) {
      newData[selectedIndex].status = status === 'In Progress' ? 'wip' : status;
      window.localStorage.setItem("data", JSON.stringify(newData));
      setAction("drop");
    }
  }

  const onDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  }

  return (
    <div onDragOver={onDragOver} onDrop={(e) => onDrop(e, tab)}>
      <div className='border border-x-0 border-t-0 pb-2'>
        <h2 className='font-semibold'>{tab}</h2>
      </div>
      <div className='py-2 grid gap-2'>
        {
          notes?.length > 0 ?
          notes.map((note) => (
            <Note key={note.id} noteData={note} onDragStart={onDragStart} /> 
          )) 
          : 
          <div>
            No task yet.
          </div>
        }
      </div>
    </div>
  )
}

export default Notes