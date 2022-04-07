
const FilterPagination =(props)=>{
    return(
        <div class="container">
   
    <div class="row">
      <div class="col-md-3">
        Filter
      </div>
      <div class="col-md-9">
        Results here
      </div>
    </div>

    <div class="row">
      <div class="col-md-9 offset-md-3">
        
        <nav aria-label="Page navigation">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>

      </div>
    </div>
  </div>
    )

}

export default FilterPagination;