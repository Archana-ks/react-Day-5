import {  useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { AddUser } from './Components/AddUser';
import { Nopage } from './Components/NoPage';
import UserComponent from './Components/UserComponent';
import { UserDetails } from './Components/UserDetails';
import { data } from './Data/data';
import EditUser from "./Components/EditUser";

function App() {
const [user, setUser] = useState(data)
    return (
    <div className="App">
      
      <Switch>

        <Route exact path="/">
        <UserComponent
        user={user}
        setUser={setUser}/>
        </Route>
        
        <Route path="/add/user">
          <AddUser
          user={user}
          setUser={setUser}/>
        </Route>

        <Route path="/edit/:id">
        <EditUser
         user={user}
          setUser={setUser}/>
        </Route>


        <Route path="/user/:id">
           <UserDetails user={user}/>
        </Route>

        <Route path="/students">
             <Redirect path= "/"/>
        </Route>

        <Route path = "**">
            <Nopage/>
        </Route>
      
      </Switch>
    </div>
  );
}

export default App;
