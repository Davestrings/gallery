import React, { useState, useEffect } from "react";

const UserProfile = (props) => {
  const [userData, setUserData] = useState([]);
  console.log(props);
  console.log("param", +props.match.params.profile);

  useEffect(() => {
    const param = +props.match.params.profile;
    const localData = JSON.parse(localStorage.getItem("data"));
    const user = JSON.stringify(
      localData.find((data, index) => +data.id === param)
    );
    setUserData(JSON.parse(user));
  }, []);
  console.log(userData);
  return (
    <div>
      <img
        src={`https://picsum.photos/id/${userData.id * 33}/400/200`}
        alt="user profile"
      />
      <h1>{userData.name}</h1>
      <h3>{userData.email}</h3>
    </div>
  );
};

export default UserProfile;
