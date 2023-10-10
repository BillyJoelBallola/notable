import React, { useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';
import Header from '../components/Header';
import Control from '../components/Control';
import Notes from '../components/Notes';

const Home = () => {
  const { data } = useContext(DataContext);

  const tasks = {
    pending: [],
    wip: [],
    completed: []
  }

  useEffect(() => {
    if(data){
      data.map((t) => {
        Object.keys(tasks).map(s => {
          return t.status === s && tasks[t.status].push({...t});
        })
      })
    }
  }, [data]);

  return (
    <div>
      <Header />
      <Control />
      <div className='margin-inline'>
        <div className='py-6 grid grid-cols-3 gap-6'>
          <Notes tab={'Pending'} notes={tasks.pending}/>
          <Notes tab={'In Progress'} notes={tasks.wip}/>
          <Notes tab={'Done'} notes={tasks.completed}/>
        </div>
      </div>
    </div>
  )
}

export default Home