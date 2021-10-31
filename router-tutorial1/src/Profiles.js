import React from "react";
import { NavLink, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  const activeStyle = {
    background: 'black',
    color: 'white'
  }
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profile/young">young</NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profile/gildong">gildong</NavLink>
        </li>
      </ul>
      <Route path="/profile" exact render={()=> <div>사용자를 선택해주세요</div>}></Route>
      <Route path="/profile/:username" component={Profile}></Route>
  

    </div>
  )
}

export default Profiles