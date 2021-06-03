import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import BackComponent from '../components/BackComponent'

const { SearchBar } = Search;

const TableComponent = (props) => {
  const [items, setItems] = useState([]);
//   console.log(props,"props")


  //   const timeAccess = new Date(data.timeAccess);

  const getDetail = () => {

    fetch(`http://4afbe55e85c3.ngrok.io/user?page=0&&serial=`)
      .then((res) => res.json())
      .then(
        (result) => {
            console.log(result, 'result')
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {}
      );
  };

  
  useEffect(() => {
    getDetail();
  }, []);

//   const timeAccess = new Date(items.timeAccess);

  const columns = [
    
  {
    dataField: "",
    text: "Start Date",
  },
  {
    dataField: "node",
    text: "End Date",
  },

  
//   {
//     dataField: "'' + timeAccess",
//     text: "Time Acces",
//   },
  ];

  console.log(items,"items");
  console.log(columns, "columns")

  return (
    <Container>
      <ToolkitProvider keyField="id" data={items} columns={columns} search>
        {(props) => (
          <div className="mt-5">
             <h5>List History</h5>

            <div>
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          </div>
        )}
      </ToolkitProvider>
    </Container>
  );
};

export default TableComponent;
