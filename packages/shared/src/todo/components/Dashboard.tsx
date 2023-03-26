import React from 'react';
import { DashboardContext } from './DashboardContext';
import DashboardPresentation from './DashboardPresentation';

export default function Dashboard() {
  const { todos } = React.useContext(DashboardContext);

  return (
    <DashboardPresentation todos={todos}/>
  );
}
