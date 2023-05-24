import "./style.css";
import { useState, useEffect } from "react";

import Header from "../../components/Header";
import TopPosts from "../../components/TopPosts";
import RecentPosts from "../../components/RecentPosts";

import { db } from "../../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Footer from "../../components/Footer";

function Home() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchBlog = async () => {
      const blogRef = collection(db, "posts");
      const q = query(blogRef, orderBy("timestamp", "desc"));
      const blogsSnapshot = await getDocs(q);
      setData(
        blogsSnapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          content: doc.data().content,
          author: doc.data().author,
          image: doc.data().image,
          timestamp: doc.data().timestamp,
          categories: doc.data().categories,
        }))
      );
    };

    fetchBlog();
  }, []);

  return (
    <div className="container_home">
      <Header />
      {/* <Container> */}

      <TopPosts />
      <RecentPosts data={data} />

      <Footer />
      {/* // </Container> */}
    </div>
  );
}

export default Home;
