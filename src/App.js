import React, { useState, useEffect } from 'react';
import './style.css';

const Table = (props) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(20);
  const [serial, setSerial] = useState('');
  const [activePage, setActivePage] = useState('table');
  const [selectedItem, setSelectedItem] = useState({});

  const getDataPerangkat = () => {
    fetch(`http://111482feb5e7.ngrok.io/user?page=${page}&limit=${limit}&serial=${serial}`)
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
  return activePage === 'table' ? (
    <div>
        <input type="text" value={serial} onChange={(e) => setSerial(e.target.value)} />
        <input type="button" value="Search" onClick={getDataPerangkat} />
        <br/><br/>
        <table id="myTable">
            <thead>  
                <tr>
                <th>
                  Serial
                </th>
                <th>
                  PC-Name
                </th>
                <th>
                  OS
                </th>
                <th>
                  OS
                </th>
                <th>
                  System
                </th>
                <th>
                  Processor
                </th>
                </tr> 
            </thead>

            <tbody>     
                    {items.map((item, index) => {
                        return(  
                            <tr key={index} style={{cursor: "pointer"}} onClick={() => { setActivePage('detil'); setSelectedItem(item.User); }}>
                                <td scope="col">{item.serial}</td>
                                <td scope="col">{item.node}</td>
                                <td scope="col">{item.system} {item.release}</td>
                                <td scope="col">{item.machine}</td>
                                <td scope="col">{item.processor}</td>
                            </tr>
                        )
                    })}  
            </tbody>
</table>
        
    </div>
): (
<>
<button onClick={() => { setActivePage('table') }}>Back</button>
<table border="0">
  <thead>  
                <tr>
                <th>
                  UID
                </th>
                <th>
                  TIME
                </th>
                </tr> 
            </thead>
  <tbody>     
                    {selectedItem.map((data, index) => {
                        const timeAccess = new Date(data.timeAccess);
                        return(  
                            <tr key={index}>
                                <td scope="col">{data.uid}</td>
                                <td scope="col">{'' + timeAccess}</td>
                            </tr>
                        )
                    })}  
            </tbody>
</table>
</>
)
};

export default function App() {
  return (
    <div className="App">
      <Table/>
    </div>
  );
}
