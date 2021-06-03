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
  console.log(props,"props")


  //   const timeAccess = new Date(data.timeAccess);

  const getDetail = () => {

    fetch(`http://192.168.10.120:3003/komputer?page=0&limit=2&serial=${props.location.state.serial}`)
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

  const timeAccess = new Date(items.timeAccess);

  const columns = [
    
  {
    dataField: "serial",
    text: "Serial",
  },
  {
    dataField: "node",
    text: "PC-Name",
  },
  {
    dataField: "system",
    text: "OS",
  },
  {
    dataField: "machine",
    text: "Machine",
  },
  {
    dataField: "processor",
    text: "Processor",
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
          <div>
             <div className="float-left">
                 <BackComponent/>
            </div> 
            <div className="float-right">
              <SearchBar {...props.searchProps} placeholder="Search..." />
            </div>
            {/* <div>
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div> */}
          </div>
        )}
      </ToolkitProvider>
    </Container>
  );
};

export default TableComponent;
