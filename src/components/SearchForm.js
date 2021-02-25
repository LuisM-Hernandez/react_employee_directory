const SearchForm = () => {
    return ( 
        <form class="form-inline float-right">
            <div class="form-group mb-2">
            </div>
            <div class="form-group mx-sm-3 mb-2">
                <label for="inputSearch" class="sr-only">Search</label>
                <input type="text" class="form-control" id="InputSearch2" placeholder="Search" />
            </div>
            <button type="submit" class="btn btn-primary mb-2">Search</button>
        </form>
     );
}
 
export default SearchForm;