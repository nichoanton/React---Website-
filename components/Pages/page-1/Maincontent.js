import { Row, Col, Button, Table } from "react-bootstrap";

import classes from "./Maincontent.module.css";
import irsimg from "../../../img/IRS-logo.gif";
import home_pic from "../../../img/home-photo-1-4.jpg";
import home_pic2 from "../../../img/home-photo-3.jpg";
import { Fragment } from "react";

const Maincontent = () => {
  return (
    <Fragment>
      <div className={classes.maincont}>
        <Row>
          <Col lg={9}>
            <h1 className={classes.heading}>Welcome to YTT</h1>
            <p className={classes.headingcont}>
              IRS certified electronic filing of form 2290 and 8849(Sch-6) for
              small and enterprise business.
            </p>
            <Row>
              <Col sm className={classes.maincont1}>
                <div>
                  <img
                    src={irsimg}
                    alt="img-IRS"
                    className={classes.maincont1img}
                  ></img>
                </div>
                <div>
                  <a href="https://www.authorize.net/">
                    Online Payment Service
                  </a>
                </div>
              </Col>
              <Col sm className={classes.maincont2}>
                <img
                  className={classes.maincont2img}
                  src={home_pic}
                  alt="tagpic"
                />
                <h6>
                  <b>Why us?</b>
                </h6>
                <ul>
                  <li>Easy import from Excel</li>
                  <li>lorem</li>
                  <li>100% calculation guarantee</li>
                  <li>lorem</li>
                  <li>Unlimited filing with annual membership.</li>
                </ul>
              </Col>
              <Col sm className={classes.maincont3}>
                <img
                  className={classes.maincont3img}
                  src={home_pic2}
                  alt="tagpic"
                />
                <h6>
                  <b>Services?</b>
                </h6>
                <ul class="list">
                  <li>Un-limited email support</li>
                  <li>lorem</li>
                  <li>Easy and fast repeat filing</li>
                  <li>lorem</li>
                  <li>Powerful tax calculators</li>
                </ul>
              </Col>
            </Row>
            <Col>
              <p>
                For vehicles first used after July, the deadline is the last day
                of the month following the month of first use. The highway use
                tax applies to highway motor vehicles with a taxable gross
                weight of 55,000 pounds or more, which generally includes
                trucks, truck tractors, and buses. Ordinarily, vans, pick-ups,
                and panel trucks are not taxable because they fall below the
                55,000-pound threshold. The tax of up to $550 per vehicle is
                based on weight, and a variety of special rules apply, which are
                explained in the instructions to Form 2290.
              </p>
              <p>
                Last filing date for 2021-2022 tax year without fine -
                08/30/2021
              </p>
              <b>Start and File in minutes</b>
              <p>
                We understand the tax code and you don’t have to. We make filing
                excise tax so easy that you'll finish and file your form 2290 to
                the IRS in few minutes.
              </p>
              <p>
                <a href="#home">YourTruckTax.com</a> (Your Truck Tax) offers
                hassle free Excise Tax Form 2290 & 8849 e-filing for Business
                Owners and Tax Preparers. Try now and pay only when you file.
                Efile Heavy Vehicle Usage Tax (HVUT) in easy 3 steps. No matter
                what your fleet size is we support all. Its simple, easy and
                secured.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, fugiat ad? Quasi, iusto! Recusandae minus beatae eos
                omnis, mollitia tempore, ipsam nesciunt explicabo rerum
                exercitationem ratione inventore fugit ex? Repellendus, error
                non. Aperiam officia expedita earum dolore? Maxime commodi
                animi, voluptatibus fugiat pariatur cumque architecto. Tenetur,
                obcaecati. Et, molestiae mollitia unde repellendus porro ea
                neque similique ut, nihil vel voluptatem quos sunt maiores sequi
                explicabo quod reprehenderit? Rerum laboriosam vero nam culpa
                atque minima suscipit, repudiandae enim debitis, dolor libero.
              </p>
              <p>
                EFile form 2290 or amend your return or claim credits (Form
                8849). Quick & easy tax return completion, Accurate calculation,
                Import from excel, Instant error check and un-limited filing for
                annual membership for same vehicles. <a href="#more">more</a>
              </p>
              <p>
                You can try Truck Tax For Free and pay only if satisfied, you
                can learn more here @ <a href="#home">Truck Tax 2290</a>
              </p>
            </Col>
          </Col>
          <Col className={classes.sidecontent} lg={3}>
            <Button variant="primary" size="sm" className={classes.start}>
              Start Now
            </Button>
            <div className={classes.sidecontenttext}>
              <h4>
                <b>Pricing</b>
              </h4>
              <p>That fits everyone</p>
              <h5>
                <b>Single Filing</b>
              </h5>
            </div>
            <Table>
              <thead>
                <tr>
                  <th>Vehicles</th>
                  <th>Fees</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>$29.99</td>
                </tr>
                <tr>
                  <td>2-24</td>
                  <td>$39.99</td>
                </tr>
                <tr>
                  <td>25-100</td>
                  <td>$69.99</td>
                </tr>
                <tr>
                  <td>101-250</td>
                  <td>$99.99</td>
                </tr>
                <tr>
                  <td>251 and above</td>
                  <td>$199.99</td>
                </tr>
              </tbody>
            </Table>
            <br></br>
            <h5>
              <b>Annual Membership</b>
            </h5>
            <small>Includes Form 2290 & 8849</small>
            <Table>
              <thead>
                <tr>
                  <th>Vehicles</th>
                  <th>Fees</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>$39.99</td>
                </tr>
                <tr>
                  <td>2-10</td>
                  <td>$49.99</td>
                </tr>
                <tr>
                  <td>11-24</td>
                  <td>$59.99</td>
                </tr>
                <tr>
                  <td>101-250</td>
                  <td>$299.99</td>
                </tr>
                <tr>
                  <td>251 and above</td>
                  <td>$599.99</td>
                </tr>
              </tbody>
            </Table>
            <br />
            <b>VIN Correction Only $9.99</b>
            <br />
            <br />
            <Button variant="primary" size="sm" className={classes.start}>
              Start Now
            </Button>
            <br></br>
            <div className={classes.sidecontent2}>
              <h4>
                <b>Tax Practitioners</b>
              </h4>
              <a href="#contact">Contact us</a>
              <p>for colume discount.</p>
              <hr></hr>
              <h6>
                <b>Last filing date for this month - April 30 2022</b>
              </h6>
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Maincontent;
