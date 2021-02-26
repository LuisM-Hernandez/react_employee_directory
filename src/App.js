import React from "react";
import Wrapper from "./components/Wrapper";
import API from './utils/API'
import './App.css';
import InfoTable from "./components/InfoTable";
import Jumbotron from "./components/Jumbotron";
import SearchForm from "./components/SearchForm"

class App extends React.Component {
  state = {
    employees: [{}],
    employeeFilter: [{}],
    order: "descend"
  }

  headings = [
    { name: "Image", width: "10%" },
    { name: "Name", width: "10%" },
    { name: "Phone", width: "20%" },
    { name: "Email", width: "20%" },
    { name: "DOB", width: "10%" },

  ]

  handleSort = (heading) => {
    if (this.state.order === "descend") {
      this.setState({
        order: "ascend",
      });
    } else {
      this.setState({
        order: "descend",
      });
    }

    const compareFnc = (a, b) => {
      if (this.state.order === "ascend") {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      } else {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }
    };
    const sortedUsers = this.state.employeeFilter.sort(compareFnc);
    this.setState({ employeeFilter: sortedUsers });
  };


  handleSearchChange = (event) => {
    const filter = event.target.value;
    const filteredList = this.state.employees.filter((item) => {
      let values = Object.values(item).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });

    this.setState({ employeeFilter: filteredList });
  };


  componentDidMount() {
    API.getUsers()
      .then(res => {
        this.setState({
          employees: res.data.results,
          employeeFilter: res.data.resutls
        });
        // console.log(res)
      });
      // .catch(err => console.error(err.message))
  }

  render() {
    return (
      <Wrapper>
        <Jumbotron />
        <SearchForm handleSearchChange={this.handleSearchChange} />
        <br />
        <InfoTable
          headings={this.headings}
          employees={this.state.employees}
          employeeFilter={this.state.employeeFilter}
          handleSort={this.handleSort}
          handleSearchChange={this.handleSearchChange}
        />
      </Wrapper>
    );
  }
}
export default App;