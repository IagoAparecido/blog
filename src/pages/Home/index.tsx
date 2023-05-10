import "./style.css";
import React, { useState, useEffect } from "react";

import Header from "../../components/Header";
import TopPosts from "../../components/TopPosts";
import RecentPosts from "../../components/RecentPosts";
import { Container } from "@mui/material";

import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

function Home() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataRef = collection(db, "posts");
      const querySnapshot = await getDocs(dataRef);
      const dataArray = querySnapshot.docs.map((doc) => doc.data());
      setData(dataArray);
    };

    fetchData();
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
