import './FilterResults.css';
const FilterResults =(props)=>{
    return(
        <div className="container">
   
    <div className="row">
      <div className="col-md-3">
        Filter
      </div>
      <div className="col-md-9">
        

          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="/assets/filterresults/image.png" className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title heading">Barbeque Nation</h5>
                  <p className="card-text subheading"> Hinjawadi, Pune </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <hr/>
                <p className="res-info"> 
                  <span className="text-muted"> Cuisines : Fastfood, Drinks</span><br/>
                  <span className="text-muted"> Cost for two : INR 999</span>
                </p>
              </div>
            </div>
        </div>


        
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="/assets/filterresults/image.png" className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title heading">Barbeque Ville</h5>
                <p className="card-text subheading"> Wakad, Pune </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <hr/>
              <p className="res-info"> 
                <span className="text-muted"> Cuisines : Fastfood, Drinks</span><br/>
                <span className="text-muted"> Cost for two : INR 699</span>
              </p>
            </div>
          </div>
      </div>





      </div>
    </div>
  </div>
    )
}

export default FilterResults;