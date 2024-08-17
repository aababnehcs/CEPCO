import React from 'react';
import axios from 'axios';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import CitiesList from './CitiesList';
import { DataGrid } from '@mui/x-data-grid';

export default class ContractsDataTable extends React.Component {

    state = ({
      ContractsDataTable: [],
      columns:[
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'Name', headerName: 'Name', width: 130 },
        { field: 'Area', headerName: 'Area', width: 130 },
        { field: 'City', headerName: 'City', width: 130 },
        { field: 'Location', headerName: 'Location', width: 130 },
        { field: 'LocationTypeCategory', headerName: 'Location Type Category', width: 130 },
        {
          field: 'Name',
          headerName: 'Name',
           sortable: false,
          width: 160,
          valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
      ]

    })
    componentDidMount() {
        axios.get(`https://localhost:7127/api/Contracts/GetContacts`)
          .then(res => {
            var Contracts = res.data;
            this.setState({ContractsDataTable:Contracts});
            })
    }




    
      render() {
        return (
          <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={ContractsDataTable}
        columns={this.state.columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
            
        );
}

}
