import React from "react"
import Wrapper from "./components/Wrapper";
import API from './utils/API'
import './App.css';
import InfoTable from "./components/InfoTable";
import Jumbotron from "./components/Jumbotron";
import SearchForm from "./components/SearchForm"

class App extends React.Component {
    state = {
        employees: [],
        employeeFilter: []
    }

    
   handleInputSearch = (event) => {
     const filter = event.target.value
     const filteredList = this.state.employees.filter((user) => {
      //  The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop enumerates properties in the prototype chain as well.)
      let values = Object.values(user).join("").toLocaleLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1
     });
     this.setState({ employeeFilter: filteredList})
   }




    componentDidMount() {
        API.getUsers()
        .then(res => {
            this.setState({ 
              employees: res.data.results,
              employeeFilter: res.data.resutls
            })
            console.log(res)
        })
            .catch(err => console.error(err.message))
    }

    

  

    render() {
        return (
            <Wrapper>
                <Jumbotron />
                <SearchForm handleInputSearch={this.handleInputSearch}/>
                <br/>
                <InfoTable employees={this.state.employees} />
            </Wrapper>
        );
    }
}
export default App;