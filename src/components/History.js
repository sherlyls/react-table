import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import BackComponent from '../components/BackComponent'
import filterFactory, { dateFilter } from 'react-bootstrap-table2-filter';

const { SearchBar } = Search;

const TableComponent = (props) => {


  
  const [items, setItems] = useState([]);

  const columns = [
    
  {
    dataField: "",
    text: "Date",
    filter: dateFilter()
 
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
      <ToolkitProvider keyField="id" data={items} columns={columns} search  >
        {(props) => (
          <div className="mt-5">
             <h5>List History</h5>

            <div>
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
                filter={ filterFactory()}
              />
            </div>
          </div>
        )}
      </ToolkitProvider>
    </Container>
  );
};

export default TableComponent;
