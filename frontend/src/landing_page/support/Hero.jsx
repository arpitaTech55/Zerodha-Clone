function Hero() {
  return (
    <section className="container-fluid p-0" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <h5><a href="">Track Tickets</a> </h5>
        
      </div>
      <div className="row p-6 m-3">
        <div className="col-1"></div>
        <div className="col-5 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <br></br>
          <input placeholder="Eg. how do I activate F&O, why is my order getting rejected..." />
          <br />  <br></br>
          <a href="">Track account opening</a> &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="">Track segment activation</a> &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="">Intraday margins</a> &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="">Kite user manual</a> &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="col-1"></div>
        <div className="col-4 p-3">
          <h1 className="fs-3">Featured</h1>
          <br></br>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li><br></br>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;