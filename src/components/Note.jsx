import React from 'react'
import moment from 'moment'
import { truncate } from '../static/func';

const Note = ({ noteData, onDragStart }) => {
  const [date, time] = noteData?.date?.split("T");

  return (
    <div className='shadow-md border rounded-lg p-4' draggable onDragStart={(e) => onDragStart(e, noteData.id)}>
      <div className='rounded-md pb-4'>
        <p className='text-justify'>{truncate(noteData.note)}</p>
      </div>
      <span className='text-sm font-semibold text-gray-400'>{moment(date).format('LL')}</span>
    </div>
  )
}

export default Note