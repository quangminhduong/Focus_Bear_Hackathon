import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import axios from 'axios';

const TableExample = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the data from your API or data source
    axios.get('http://10.0.2.2:3000/auth/login')
      .then(response => setData(response.data));
  }, []);

  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Email</DataTable.Title>
        <DataTable.Title>Morning</DataTable.Title>
        <DataTable.Title>Evening</DataTable.Title>
        <DataTable.Title>Focus Mode</DataTable.Title>
      </DataTable.Header>
      {data.map((item, index) => (
        <DataTable.Row key={index}>
          <DataTable.Cell>{item.email}</DataTable.Cell>
          <DataTable.Cell>{item.morning}</DataTable.Cell>
          <DataTable.Cell>{item.evening}</DataTable.Cell>
          <DataTable.Cell>{item.focusMode}</DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default TableExample;

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
});
