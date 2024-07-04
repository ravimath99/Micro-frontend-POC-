import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
// import Test from "remote/Test"
import UserLoggedIn from "./components/UserList";

const RemoteApp = React.lazy(()=> import("remote/App"))


import "./index.css";

const App = () => {
  const [  userList , setUserList] = useState({});

  useEffect(()=>{
    // console.log('Host data from remote', data);
    // setUserList(data);
  }, [])

  return(
    <>
      <div className="container">
        <React.Suspense fallback="loading...">
          <RemoteApp />
        </React.Suspense>
      </div>
      {/* { Object.keys(userList).length > 0 ? <UserLoggedIn data={userList} /> : null} */}
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
