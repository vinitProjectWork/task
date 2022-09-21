import { Fragment } from "react";

interface IProps {
  setFilterValue: any;
  filterValue: string;
  setFilterKey: any;
  filterKey: string;
}
const Filter = ({
  setFilterValue,
  filterValue,
  setFilterKey,
  filterKey,
}: IProps) => {
  return (
    <Fragment>
      <div className="filter-wrapper">
        <p>Filter Results</p>
        <input
          placeholder="Type here to search"
          className="input-box"
          value={filterValue}
          onChange={(e: any) => setFilterValue(e.target.value)}
        />

        {filterValue !== "" && (
          <span className="clear-icon" onClick={() => setFilterValue("")}>
            &#10006;
          </span>
        )}
      </div>

      <div className="radio-wrapper">
        <input
          type="radio"
          className="radio-input"
          id="id"
          name="filters"
          // value={filterKey}
          checked={filterKey === "id"}
          onClick={() => setFilterKey("id")}
        />
        <label htmlFor="id">Id</label>
        <br />
        <input
          type="radio"
          className="radio-input"
          id="userid"
          name="filters"
          value="userid"
          checked={filterKey === "userid"}
          onClick={() => setFilterKey("userid")}
        />
        <label htmlFor="userid">User Id</label>
        <input
          type="radio"
          className="radio-input"
          id="title"
          name="filters"
          value="title"
          checked={filterKey === "title"}
          onClick={() => setFilterKey("title")}
        />
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="radio"
          className="radio-input"
          id="body"
          name="filters"
          value="body"
          checked={filterKey === "body"}
          onClick={() => setFilterKey("body")}
        />
        <label htmlFor="body">Body</label>
      </div>
      <div className="applied-filter">{`Applied filter: ${filterKey.toLocaleUpperCase()}`}</div>
    </Fragment>
  );
};

export default Filter;
