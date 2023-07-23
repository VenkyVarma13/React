import React from 'react';
//import {useNavigate} from "react-router-dom";
import {UserContext} from './App';

const Home = () => {
  return (
    <div>
        <center>
          <UserContext.Consumer>
            {value => <div>{value}</div>}
          </UserContext.Consumer>
        </center>
    </div>
  )
}

export default Home
