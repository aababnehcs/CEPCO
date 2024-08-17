import React from 'react';
import axios from 'axios';



export default class LocationsTypeCategoiesList extends React.Component {
    state = {
        LocationsTypeCategoies: []
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const LocationsTypeCategoies = res.data;
            this.setState({ LocationsTypeCategoies });
          })
      }
      render() {
        return (
            <Select
            value={LocationsTypeCategoyId}
            onChange={e => setLocationsTypeCategoyId(e.target.value)}
            input={<OutlinedInput label="Name" />}
            width='75%'
            label="Locations Type Categoies"
            fullWidth
          >
            {
              this.state.CitiesList
                .map(City =>
                  <Option key={City.id} value={City.id}>{City.name}</Option>
                )
            }
            </Select>
        );
}

}
