import './Filters.css';
const Filters=(props)=>{
    return(
        <div className="container">
    <div className="row">
      <div className="col-md-12 heading">
        Breakfast Places in Pune
      </div>
    </div>
    <div className="row">
      <div className="col-md-3 card">

         <span className="subheading"> Filters</span>
         <span className="text-muted"> Select Location</span>
         <select className="form-select" aria-label="Default select example">
          <option selected disabled>Choose your area</option>
          <option value="FC Road">FC Road</option>
          <option value="Wakad">Wakad</option>
          <option value="Baner">Baner</option>
          <option value="Hinjawadi">Hinjawadi</option>
        </select>
         <br/>

         <span className="text-muted"> Cuisine</span>
         <div className="form-check">
          <input className="form-check-input" type="checkbox" value="North Indian" id="chbNorthIndian"/>
          <label className="form-check-label" for="chbNorthIndian">
             North Indian
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="South Indian" id="chbSouthIndian"/>
          <label className="form-check-label" for="chbSouthIndian">
            South Indian
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Chinese" id="chbChinese"/>
          <label className="form-check-label" for="chbChinese">
            Chinese
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Fast Food" id="chbFastFood"/>
          <label className="form-check-label" for="chbFastFood">
            Fast Food
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="Drinks" id="chbDrinks"/>
          <label className="form-check-label" for="chbDrinks">
            Drinks
          </label>
        </div>
        <br/>

        <span className="text-muted"> Cost for two (In Rupees)</span>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="cost" id="rblt0.5" value="0-500" checked/>
          <label className="form-check-label" for="rblt0.5">
            Less than 500
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="cost" id="rb0.5kto1k" value="500-1000"/>
          <label className="form-check-label" for="rb0.5kto1k">
            500 - 1000
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="cost" id="rb1kto1.5k" value="1000-1500"/>
          <label className="form-check-label" for="rb1kto1.5k">
            1000 - 1500
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="cost" id="rb1.5kto2k" value="1500-2000"/>
          <label className="form-check-label" for="rb1.5kto2k">
            1500 - 2000
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="cost" id="rb2k+" value="2000"/>
          <label className="form-check-label" for="rb2k+">
            More than 2000
          </label>
        </div>
        <span className="subheading"> Sort</span>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="sort" id="rbPriceLowToHigh" value="LowToHigh" checked/>
          <label className="form-check-label" for="rbPriceLowToHigh">
            Price - Low to High
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="sort" id="rbPriceHighToLow" value="HighToLow"/>
          <label className="form-check-label" for="rbPriceHighToLow">
            Price - High to Low
          </label>
        </div>
        <br/>

      </div>
      <div className="col-md-9">
        result
      </div>
    </div>
  </div>
    )
}

export default Filters;