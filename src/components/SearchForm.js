import React from "react";
const SearchForm = ({handleInputSearch}) => {
    return ( 
        <form className="form-inline float-right">
            <div className="form-group mb-2">
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="inputSearch" className="sr-only">Search</label>
                <input 
                  className="form-control"
                  type="text"
                  placeholder="Search Employee"
                //   id="search"
                  onChange={e => handleInputSearch(e)}
             />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Search</button>
        </form>
     );
}
 
export default SearchForm;