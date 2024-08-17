import React from 'react';
import axios from 'axios';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import CitiesList from './CitiesList';

export default class AreasList extends React.Component {

    state = ({
        AreasList: []
    })
    componentDidMount() {
        axios.get(`https://localhost:7127/api/Areas/GetArea`)
          .then(res => {
            var areas = res.data;
            this.setState({AreasList:areas});
            })
    }
      render() {
        return (<>
            <Select
            onChange={this.handleChange}
            input={<OutlinedInput label="Name"/>}
            width='75%'
            label="City"
            fullWidth
          >
            {
              this.state.AreasList
                .map((area) =>
                  <MenuItem key={area.id} value={area.id}>{area.name}</MenuItem>
                )}
            </Select>
            <CitiesList/></>
        );
}

}
