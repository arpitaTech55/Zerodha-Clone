import { Link } from "react-router-dom"; 

const Funds = () => {
  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI</p>
        <Link className="btn " style={{backgroundColor : "#4caf50"}} to="/add-funds">
          Add funds
        </Link>
        <Link className="btn " style={{backgroundColor : "#4184f3"}} to="/withdraw">
          Withdraw
        </Link>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <table>
              <tbody>
                <tr>
                  <td>Available margin</td>
                  <td className="imp colored">4,043.10</td>
                </tr>
                <tr>
                  <td>Used margin</td>
                  <td className="imp">3,757.30</td>
                </tr>
                <tr>
                  <td>Available cash</td>
                  <td className="imp">4,043.10</td>
                </tr>
                <hr></hr>
                <tr>
                  <td>Opening Balance</td>
                  <td>4,043.10</td>
                </tr>
                <tr>
                  <td>Previous Opening Balance</td>
                  <td>3,736.40</td>
                </tr>
                <tr>
                  <td>Payin</td>
                  <td>4,064.00</td>
                </tr>
                <tr>
                  <td>SPAN</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Delivery margin</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Exposure</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Options premium</td>
                  <td>0.00</td>
                </tr>
                <hr></hr>
                <tr>
                  <td>Collateral (Liquid funds)</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Collateral (Equity)</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Total Collateral</td>
                  <td>0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue" to="/open-account">
              Open Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
