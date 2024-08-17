import React from 'react';
import axios from 'axios';
import AreasList from './AreasList';
import LocationsList from './LocationsList';
import CitiesList from './CitiesList';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default class AddUser extends React.Component {
    state = {
        employeeId: '',
        idNumber:'',
        iqamaIdExpiredDate: '',
        dateOfBirth:'',
        areaId:'',
        cityId:'',
        locationId:''
    }


    handleChange = event => {
        this.setState({ employeeId: event.target.value });
        this.setState({ idNumber: event.target.value });
        this.setState({ iqamaIdExpiredDate: event.target.value });
        this.setState({ dateOfBirth: event.target.value });
        this.setState({ areaId: event.target.value });
        this.setState({ cityId: event.target.value });
        this.setState({ locationId: event.target.value });

      }
    handleSubmit = event => {
        event.preventDefault();
    
        const User = {
          employeeId: this.state.employeeId,
          idNumber:this.state.idNumber,
          iqamaIdExpiredDate: this.state.iqamaIdExpiredDate,
          dateOfBirth:this.state.dateOfBirth,
          areaId:this.state.areaId,
          cityId:this.state.cityId,
          locationId:this.state.areaId,

        };
    
        axios.post(`https://jsonplaceholder.typicode.com/users`, { User })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }





    

      render() {
        return (    
        <>
            <Grid item md={12}>
            <TextField width='75%'  fullWidth onChange={this.handleChange} label="Employee Id" id="fullWidth" />
            </Grid>
            <Grid item md={12}>
            <TextField width='75%' fullWidth onChange={this.handleChange} label="Id Number" id="fullWidth" />
            </Grid>
            <Grid item  md={12}>
            <TextField width='75%' fullWidth onChange={this.handleChange} label="IqamaId Expired Date" id="fullWidth" />
            </Grid>
            <Grid item  md={12}>
            <TextField width='75%' fullWidth onChange={this.handleChange} label="IqamaId Expired Date" id="fullWidth" />
            </Grid>
            <AreasList/>
            <CitiesList/>
            <LocationsList/>
            <Grid item md={12} alignItems='center'>
             <Button variant="contained">Save</Button>
            </Grid>   
        </>
         );
}
}
