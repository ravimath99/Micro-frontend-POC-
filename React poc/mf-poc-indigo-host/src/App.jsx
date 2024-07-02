import React, { useState } from "react";
import ReactDOM from 'react-dom';
// import Test from "remote/Test"
import UserLoggedIn from "./components/UserList";

const RemoteApp = React.lazy(()=> import("remote/Test"))


import "./index.css";

const App = () => {
  let userData = {};
  const [  userList , setUserList] = useState({});
  const handleFromSubmit = (formData)=>{
    console.log("FormData",formData);
    setUserList({
      email: formData.email,
      password: formData.password,
      name: formData.name,
      number: formData.number
    });
    console.log("userListh",userList);
  };

  return(
    <>
      <div className="container">
        <React.Suspense fallback="loading...">
          <RemoteApp onSubmit={handleFromSubmit} />
        </React.Suspense>
      </div>
      { Object.keys(userList).length > 0 ? <UserLoggedIn data={userList} /> : null}
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
