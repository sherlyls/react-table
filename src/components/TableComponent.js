import React, {useState, useEffect} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";

const { SearchBar } = Search;

const TableComponent = (props) => {
const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(20);
  const [serial, setSerial] = useState('');
  const [activePage, setActivePage] = useState('table');
  const [selectedItem, setSelectedItem] = useState({});
const getDataPerangkat = () => {
  fetch(`http://192.168.10.120:3003/user?page=1&&serial=`)
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          
        }
      )
}
useEffect(() => {    
  getDataPerangkat();
}, []);


const columns = [
  {
    dataField: "serial",
    text: "Serial",
  },
  {
    dataField: "uid",
    text: "UID",
  },
  {
    dataField: "cn",
    text: "CN",
  },
  {
    dataField: "displayName",
    text: "Display Name",
  },
  {
    dataField: "sn",
    text: "Serial Number",
  },
  {
    dataField: "givenName",
    text: "Given Name",
  },
  {
    dataField: "personalTiltle",
    text: "Personal Title",
  },
  {
    dataField: "o",
    text: "Company",
  },
  {
    dataField: "ou",
    text: "Department",
  },  
  {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
      console.log(row,"row")
      return (
        <div>
          {/* <Link to={"detail/" + row._id, tate:{data: item}}> */}
          <Link to={{pathname:`/detail/${row._id}`, state:{serial: row.serial}}}>
            
            <Button color="dark" className="mr-2">
              <FontAwesomeIcon icon={faInfo} /> Detail
            </Button>
          </Link>
        </div>
      );
    },
  },
];


  return (
    <Container>
      <ToolkitProvider
        keyField="id"
        data={items}
        columns={columns}
        search
      >
        {(props) => (
          <div>
            <div className="float-right">
              <SearchBar {...props.searchProps} placeholder="Search..." />
            </div>
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
