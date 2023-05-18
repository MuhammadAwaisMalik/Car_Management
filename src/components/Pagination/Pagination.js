import React from "react";
import "./pagination.css";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page, index) => {
            return (
              <li
                className={`page-item ${page == currentPage ? "active" : ""}`}
                style={{ cursor: "pointer" }}
                key={index}
              >
                <a className="page-link" onClick={() => setCurrentPage(page)}>
                  {page}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
