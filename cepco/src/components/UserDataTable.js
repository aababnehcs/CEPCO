import React from 'react';
import axios from 'axios';


export default class UserDataTable extends React.Component {
    state = ({
        UserDataTable: []
    })
    componentDidMount() {
        axios.get(`https://localhost:7127/api/User/GetUserdata`)
          .then(res => {
            var Userdata = res.data;
            this.setState({UserDataTable:Userdata});
            })
    }
      render() {
        return (
            <table>

            {
               
                this.state.UserDataTable
                .map((user) =>
    
    
                 
                    <><tr>
                        <th>Name</th>
                        <td>user.Name</td>

                    </tr><tr>
                            <th>Employee Id</th>
                            <td>user.employeeId</td>

                        </tr><tr>
                            <th>iqamaIdExpiredDate</th>
                            <td>user.iqamaIdExpiredDate</td>

                        </tr><tr>
                            <th>dateOfBirth</th>
                            <td>user.dateOfBirth</td>

                        </tr><tr>
                            <th>Area</th>
                            <td>User.Area.name</td>

                        </tr><tr>
                            <th>City</th>
                            <td>User.City.name</td>

                        </tr><tr>
                            <th>Location</th>
                            <td>user.Location.name</td>

                        </tr></>

              




                )      }
</table>    
        );
}

}
