const SearchForm = () => {
    return ( 
        <form className="form-inline float-right">
            <div className="form-group mb-2">
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="inputSearch" className="sr-only">Search</label>
                <input type="text" className="form-control" id="InputSearch2" placeholder="Search" />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Search</button>
        </form>
     );
}
 
export default SearchForm;