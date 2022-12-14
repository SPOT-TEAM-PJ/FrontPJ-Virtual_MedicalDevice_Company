import React from "react";

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);

  return (
    <div className="Pagination">
      <button
        className="PageMove"
        onClickㅞㅡ={() => setPage(page - 1)}
        disabled={page === 1}
      >
        {"<"}
      </button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <button
            className={["PageIndex", `${page === i + 1 ? "on" : "off"}`].join(
              " "
            )}
            key={i + 1}
            onClick={() => setPage(i + 1)}
            // aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </button>
        ))}
      <button
        className="PageMove"
        onClick={() => setPage(page + 1)}
        disabled={page === numPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
