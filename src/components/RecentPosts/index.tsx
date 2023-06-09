import "./style.css";
import { useState, useEffect } from "react";
import CardPost from "../CardPost";
import ReactPaginate from "react-paginate";
import { Container } from "@mui/material";

export interface PostData {
  title: string;
  content: string;
  author: string;
  image: string;
  timestamp: string;
  categories: string[];
  id?: string;
}

function RecentPosts({ data }: { data: PostData[] }) {
  const [loading, setLoading] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState<number>(0);

  const postsPerPage = 9;
  const pagesVisited: number = pageNumber * postsPerPage;

  const displayPosts = (): JSX.Element => {
    return (
      <Container>
        <div className="recent_content">
          {data && data.length > 0
            ? data
                .slice(pagesVisited, pagesVisited + postsPerPage)
                .map((post, index) => {
                  const timestamp = post.timestamp;
                  const formattedDate = new Date(timestamp).toLocaleDateString(
                    "pt-BR"
                  );
                  return (
                    <CardPost
                      key={index}
                      title={post?.title}
                      date={formattedDate}
                      author={post?.author}
                      image={post?.image}
                      categories={post?.categories}
                      id={post?.id}
                    />
                  );
                })
            : null}
        </div>
      </Container>
    );
  };

  const pageCount: number = Math.ceil(data?.length / postsPerPage);

  const changePage = ({ selected }: { selected: number }): void => {
    setPageNumber(selected);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [data]);

  return (
    <div className="recent_container">
      <h1>Recent Posts</h1>

      {loading ? (
        <div className="lds-ellipsis-home">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        displayPosts()
      )}

      <ReactPaginate
        className="paginate"
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default RecentPosts;
