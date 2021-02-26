const SearchForm = ({ handleSearchChange }) => {
    console.log(handleSearchChange);
    return (
        <div className="searchbox float-right">
        <form className="form-inline">
            <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
                onChange={e => handleSearchChange(e)}
            />
            <button type="submit" className="btn btn-primary mb-2">Search</button>
        </form>
    </div>
    );
}

export default SearchForm;