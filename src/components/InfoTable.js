import React, { Component } from "react";
import API from "../utils/API"


class InfoTable extends Component {

  state = {
    employees:[]
    }

  componentDidMount() {
    API.getUsers()
    .then(res => {
      this.setState({ employees: res.data.results })
      console.log(res);
    })
    
  }

  render() {
  
    return (
        <table className="table">
        <thead className="thead-dark">
            <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
            </tr>
        </tbody>
    </table>
    );
  }
}

export default InfoTable;