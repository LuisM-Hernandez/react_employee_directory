import React from "react"
import Wrapper from "./components/Wrapper";
import API from './utils/API'
import './App.css';
import InfoTable from "./components/InfoTable";
import Jumbotron from "./components/Jumbotron";
import SearchForm from "./components/SearchForm"

class App extends React.Component {
    state = {
        employees: []
    }
    componentDidMount() {
        API.getUsers()
        .then(res => {
            this.setState({ employees: res.data.results })
            console.log(res)
        })
            .catch(err => console.error(err.message))
    }
    render() {
        return (
            <Wrapper>
                <Jumbotron />
                <SearchForm />
                <br/>
                <InfoTable employees={this.state.employees} />
            </Wrapper>
        );
    }
}
export default App;