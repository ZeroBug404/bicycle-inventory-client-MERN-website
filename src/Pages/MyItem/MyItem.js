import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./MyItem.css";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    const getMyItems = async () => {
      const email = user?.email;
      console.log(email);
      const url = `https://polar-oasis-43531.herokuapp.com/products?email=${email}`;
      const { data } = await axios.get(url);
      setMyItems(data);
    };
    getMyItems();
  }, [user]);

  return (
    <div>
      <h1>My Items: {myItems.length}</h1>
    </div>
  );
};

export default MyItem;
