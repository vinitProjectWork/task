import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable, { TableColumn } from "react-data-table-component";

//custom import
import Filter from "./component/Filter";

//styles
import "./App.scss";

//redux action
import { storeData } from "./store/postDataAction";
import { ITableData } from "./types";
import { gql, useQuery } from "@apollo/client";

const App = () => {
  const dispatch = useDispatch();

  const data1 = useSelector((state: any) => state.data);

  const [filterValue, setFilterValue] = useState<string>("");
  const [filterKey, setFilterKey] = useState<string>("title");

  const GET_LOCATIONS = gql`
    query {
      posts {
        totalCount
        nodes {
          id
          body
          title
          userId
        }
      }
    }
  `;

  const { loading, data, error } = useQuery(GET_LOCATIONS);

  useEffect(() => {
    if (data) {
      dispatch(storeData(data?.posts?.nodes));
    }

    // let url = "https://gorest.co.in/public/v2/posts";
    // if (filterValue !== "" && filterKey !== "") {
    //   url += `?${filterKey}=` + filterValue;
    // }
    // fetch(url)
    //   .then((response: any) => response.json())
    //   .then((response: ITableData) => {
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, [data]);

  const columns: TableColumn<ITableData>[] = [
    {
      id: 1,
      name: "Id",
      selector: (row: any) => row.id,
      grow: 0,
    },
    {
      id: 4,
      name: "User Id",
      selector: (row: any) => row.userId,
      grow: 0,
    },
    {
      id: 2,
      name: "Title",
      selector: (row: any) => row.title,
    },
    {
      id: 3,
      name: "Body",
      selector: (row: any) => row.body,
    },
  ];

  return (
    <div className="wrapper">
      <h2>Data Table</h2>

      <Filter
        setFilterValue={setFilterValue}
        setFilterKey={setFilterKey}
        filterValue={filterValue}
        filterKey={filterKey}
      />

      <div className="table-wrapper">
        <DataTable
          columns={columns}
          data={data1}
          pagination
          paginationRowsPerPageOptions={[5, 50, 100]}
        />
      </div>
    </div>
  );
};

export default App;
