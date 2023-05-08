import "./style.css";
import { useState } from "react";
import CardPost from "../CardPost";
import { BsSearch } from "react-icons/bs";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";

interface PostData {
  title: string;
  content: string;
  author: string;
}

function RecentPosts({ data }: { data: PostData[] }) {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const postsPerPage = 10;
  const pagesVisited: number = pageNumber * postsPerPage;

  const displayPosts = (): JSX.Element => {
    return (
      <div className="recent_content">
        {data
          ?.slice(pagesVisited, pagesVisited + postsPerPage)
          ?.map((post, index) => (
            <CardPost key={index} {...post} />
          ))}
      </div>
    );
  };

  const pageCount: number = Math.ceil(data?.length / postsPerPage);

  const changePage = ({ selected }: { selected: number }): void => {
    setPageNumber(selected);
  };

  return (
    <div className="recent_container">
      <h1>Posts Recentes</h1>

      <form action="">
        <input type="text" />
        <button>
          <BsSearch />
        </button>
      </form>
      {displayPosts()}
      <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Próxima"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        // define as propriedades da interface de props do componente ReactPaginate
      />
    </div>
  );
}

export default RecentPosts;
