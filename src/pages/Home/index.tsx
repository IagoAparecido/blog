import "./style.css";
import React, { useState, useEffect } from "react";

import { ref, onValue } from "firebase/database";
import Header from "../../components/Header";
import TopPosts from "../../components/TopPosts";
import RecentPosts from "../../components/RecentPosts";
import { Container } from "@mui/material";

import { db } from "../../firebase";

function Home() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const dataRef = ref(db, "/");

    onValue(dataRef, (snapshot) => {
      const val = snapshot.val();

      const dataArray = Object.values(val);
      setData(dataArray);
    });
  }, []);

  return (
    <div className="container_home">
      <Header />
      {/* <Container> */}

      <TopPosts />
      <RecentPosts data={data} />

      {/* // </Container> */}
    </div>
  );
}

export default Home;
