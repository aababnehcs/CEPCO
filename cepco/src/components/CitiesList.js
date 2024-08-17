import React from 'react';
import axios from 'axios';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';

export default class CitiesList extends React.Component {
    state = {
        CitiesList: [],
        employeeId: "",
        idNumber:"",
        iqamaIdExpiredDate: "",
        dateOfBirth:"",
        areaId:-1,
        cityId:-1,
        locationId:-1,
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
console.log(this.state.areaId)
    }

    componentDidMount() {
        axios.get(`https://localhost:7127/api/Cities/GetCities`, {
          params: {
            
            Id: this.state.areaId,
           
          }})
          .then(res => {
            var Cities = res.data;
            this.setState({CitiesList:Cities});
            })
    }
      render() {

        return (
            <Select
            onChange={this.handleChange}
            input={<OutlinedInput label="Name" />}
            width='75%'
            label="City"
            fullWidth
          >
            {
              this.state.CitiesList
                .map(City =>
                  <MenuItem key={City.id} value={City.id}>{City.name}</MenuItem>
                )
            }
            </Select>
        );
}

}
