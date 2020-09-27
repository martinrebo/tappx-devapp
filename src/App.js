import React, { useEffect, useContext, Suspense } from 'react';
import './App.css';

import Header from './Components/Header/Header'
import Button from './Components/Button/Button';
import Table from './Components/Table/Table';

import { store } from './store/store'
import PieChart from './Components/PieChart/PieChart';

function App() {

  const URL = 'https://randomuser.me/api/?results=50&inc=id,name,location,gender,email,cell&noinfo&seed=developers'

  const globalState = useContext(store);
  const { dispatch } = globalState;


  useEffect(() => {
    fetch(URL).then(res => res.json())
      .then(data =>
        dispatch({ type: 'GET_ALL_DEVS', payload: data.results }))

  }, [])


  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div className="App-main">
        <Button />
        <Suspense fallback={<h1> Loading ... </h1>}>
          <PieChart devs={globalState.state.devs} />
          <Table devs={globalState.state.devs} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
