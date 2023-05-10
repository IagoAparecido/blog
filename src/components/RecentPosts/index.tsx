import "./style.css";
import { useState } from "react";
import CardPost from "../CardPost";
import ReactPaginate from "react-paginate";
import { Container } from "@mui/material";

export interface PostData {
  post: {
    title: string;
    content: string;
    author: string;
    imageUrl?: string;
    timestamp: string;
    categories: string[];
  };
}

function RecentPosts({ data }: { data: PostData[] }) {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const postsPerPage = 10;
  const pagesVisited: number = pageNumber * postsPerPage;
  console.log(data[0]?.post.categories);

  const displayPosts = (): JSX.Element => {
    return (
      <Container>
        <div className="recent_content">
          {data && data.length > 0
            ? data
                .slice(pagesVisited, pagesVisited + postsPerPage)
                .map((post, index) => (
                  <CardPost
                    key={index}
                    title={post.post.title}
                    date={post.post.timestamp}
                    content={post.post.content}
                    author={post.post.author}
                  />
                ))
            : null}
        </div>
      </Container>
    );
  };

  const pageCount: number = Math.ceil(data?.length / postsPerPage);

  const changePage = ({ selected }: { selected: number }): void => {
    setPageNumber(selected);
  };

  return (
    <div className="recent_container">
      <h1>Recent Posts</h1>

      {displayPosts()}
      <ReactPaginate
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
