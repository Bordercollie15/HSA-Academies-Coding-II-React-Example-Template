import React from 'react'
import List from './containers/TodoList/index'
import Home from './containers/Home'

const userName = null;

const App = () => (
  <div className="App">
    {!!userName ? <Home name={userName} /> : <Home name="Stranger" />}
    <List />
  </div>
)

export default App