import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Loader from "./Components/Loader";
import Detail from "./Components/Detail";
import Axios from "axios";

function App() {
  const [Clicked, ButtonClick] = useState(0); 
  const [isLoader, Load] = useState(false);
  const [data, setData] = useState(null);

  const getUsers = () => {
    Load(true);
    Axios.get("https://reqres.in/api/users?page=2").then((response) => {
      setData(response.data.data);
      Load(false);
    });
  };

  useEffect(() => {
    Clicked && getUsers();
  }, [Clicked]);

  return (
    <div className="App">
      <Header ButtonClick={ButtonClick}/>
      {" "}
      <div className="row">
        {" "}
        {" "}
        {data && data.map((val) => {
            return (
              <Detail
                first_name={val.first_name}
                last_name={val.last_name}
                email={val.email}
                avatar={val.avatar}
              />
            );
          })
        }
        {" "}
      </div>
        {" "}
      <Loader show={isLoader} />
      {" "}
    </div>
  );
}
export default App;