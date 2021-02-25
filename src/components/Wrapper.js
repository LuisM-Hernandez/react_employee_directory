import InfoTable from "./InfoTable"
import Jumbotron from "./Jumbotron"
import SearchForm from "./SearchForm"

const Wrapper = () => {
    return ( 
        <div className="wrapper">
            <Jumbotron />
            <SearchForm />
            <InfoTable />
        </div>
     );
}
 
export default Wrapper;