import React from 'react';
import { DashboardContext } from './DashboardContext';

export default function Dashboard() {
  const { todos } = React.useContext(DashboardContext);

  return (
    <div id="dashboard">
      <h1>Dashboard</h1>
      <h2>Total: <i>{ todos.length }</i></h2>
      <h2>Finished: <i>{ todos.filter(todo => todo.done).length }</i></h2>
    </div>
  )
}
