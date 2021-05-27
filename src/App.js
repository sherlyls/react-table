import React from 'react';
import './style.css';
import {Data} from './Data'

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    console.log(...items, 'TEST')
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const Table = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.Data);
  const getClassNamesFor = (name) => {
    console.log(name,"name")
    if (!sortConfig) {
      console.log(sortConfig,"sortconfig 1")
      return;
    }
    console.log(sortConfig,"sortconfig 2")
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  
  return(
    <div>
        <p>Data</p>
       

        <table id="myTable">
            <thead>  
                <tr>
                <th>
                  <button type="button" onClick={() => requestSort('serial')}
                  className={getClassNamesFor('serial')}>
                  Serial
                </button>
                </th>
                <th>
                  <button type="button" onClick={() => requestSort('uid')}
                  className={getClassNamesFor('uid')}>
                  UID
                </button>
                </th>
                <th>
                  <button type="button" onClick={() => requestSort('cn')}
                  className={getClassNamesFor('cn')}>
                  CN
                </button>
                </th>
                <th>
                  <button type="button" onClick={() => requestSort('displayName')}
                  className={getClassNamesFor('displayName')}>
                  Display Name
                </button>
                </th>
                <th>
                  <button type="button" onClick={() => requestSort('givenName')}
                  className={getClassNamesFor('givenName')}>
                  Serial
                </button>
                </th>
                <th>
                  <button type="button" onClick={() => requestSort('personalTitle')}
                  className={getClassNamesFor('personalTitle')}>
                  Serial
                </button>
                </th>
                <th>
                  <button type="button" onClick={() => requestSort('o')}
                  className={getClassNamesFor('o')}>
                  Serial
                </button>
                </th>
                <th>
                  <button type="button" onClick={() => requestSort('ou')}
                  className={getClassNamesFor('ou')}>
                  Serial
                </button>
                </th>
                </tr> 
            </thead>

            <tbody>     
                    {items.map((item, index) => {
                        return(  
                            <tr key={index}>
                                <td scope="col">{item.serial}</td>
                                <td scope="col">{item.uid}</td>
                                <td scope="col">{item.cn}</td>
                                <td scope="col">{item.displayName}</td>
                                <td scope="col">{item.givenName}</td>
                                <td scope="col">{item.personalTitle}</td>
                                <td scope="col">{item.o}</td>
                                <td scope="col">{item.ou}</td>
                            </tr>
                        )
                    })}  
            </tbody>
</table>
        
    </div>
)
};

export default function App() {
  return (
    <div className="App">
      <Table Data={Data}/>
    </div>
  );
}
