import "./RestaurantInfo.css";
const RestaurantInfo =(props)=>{
    return(
        <div className="container">

        <ul className="nav nav-pills mb-3 tabborder" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
              type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
              type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    
            <div className="about my-5">About this place</div>
            <div className="cuisine">Cuisine</div>
            <div className="cuisines"><span>South Indian,</span><span>Fast Food,</span></div>
            <div className="cuisine mt-3">Average Cost</div>
            <div className="cuisines"> INR 999 for two people (approx.)</div>
    
          </div>
          <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <div className="cuisine my-5">Phone Number<div className="text-danger">919453524651</div>
            </div>
            <div className="cuisine mt-4">Burger King</div>
            <div className="text-muted mt-2">Shalimar Bagh, <br/>Delhi</div>
          </div>
        </div>
    
      </div>
    )
}

export default RestaurantInfo;
