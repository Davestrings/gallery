import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const UserList = () => {
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
        localStorage.setItem("data", JSON.stringify(data));
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const newUserData = userData.filter((user, index) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="realDiv">
      <div>
        <h1>User List</h1>
        <div>
          <input onChange={handleSearch} />
        </div>
      </div>
      <div className="wrapper">
        {newUserData.map((user, index) => {
          return (
            <Link key={`${user.id}`} to={`${user.id}`}>
              <div className="mainDiv">
                <img
                  src={`https://picsum.photos/id/${user.id * 33}/400/200`}
                  alt="icon"
                />
                <h1>Name: {user.name}</h1>
                <h3>Email: {user.email} </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
