import React from 'react';
import Route from "./route/Route";
import UserState from "./store/state/UserState"

function App() {
  return (
    <UserState>
      <Route></Route>
    </UserState>
  );
}

export default App;