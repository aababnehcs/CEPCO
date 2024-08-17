import React from 'react';
import axios from 'axios';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';


export default class LocationsList extends React.Component {
    state = {
        LocationsList: []
    }
    componentDidMount() {
        axios.get(`https://localhost:7127/api/Locations/GetLocations`)
          .then(res => {
            const Locations = res.data;
            this.setState({ LocationsList:Locations });
          })
      }
      render() {
        return (
            <Select
            onChange={this.handleChange}
            input={<OutlinedInput label="Location" />}
            width='75%'
            label="City"
            fullWidth
          >
            {
              this.state.LocationsList
                .map(location =>
                  <MenuItem key={location.id} value={location.id}>{location.name}</MenuItem>
                )
            }
            </Select>
            
        );
}

}
