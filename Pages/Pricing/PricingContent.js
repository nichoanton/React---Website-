import { Fragment } from "react";
import classes from "./PricingContent.module.css";

import { Table, Row, Col } from "react-bootstrap";

const PricingContent = () => {
  return (
    <Fragment>
      <div className={classes.priceheader}>Pricing</div>
      <div>
        <Table>
          <tbody>
            <tr>
              <td>
                <div>
                  <Row>
                    <Col lg>
                      <h3 className={classes.tablehead}>Single Filing</h3>
                      <Table className={classes.tablecont}>
                        <thead>
                          <tr>
                            <th className={classes.tableheader}>No. of vehicles</th>
                            <th className={classes.tableheader}>Service fee</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className={classes.tdata}>1</td>
                            <td className={classes.tdata}>$29.99</td>
                          </tr>
                          <tr>
                            <td className={classes.tdata}>2 to 10</td>
                            <td className={classes.tdata}>$39.99</td>
                          </tr>
                          <tr>
                            <td className={classes.tdata}>11 to 24</td>
                            <td className={classes.tdata}>$49.99</td>
                          </tr>
                          <tr>
                            <td className={classes.tdata}>25 to 100</td>
                            <td className={classes.tdata}>$69.99</td>
                          </tr>
                          <tr>
                            <td className={classes.tdata}>101 to 250</td>
                            <td className={classes.tdata}>$99.99</td>
                          </tr>
                          <tr>
                            <td className={classes.tdata}>250 to 5000</td>
                            <td className={classes.tdata}>$199.99</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                    <Col lg>
                      <h3 className={classes.tablehead}>Annual Filing</h3>
                      <Table className={classes.tablecont}>
                        <thead>
                          <tr>
                            <th className={classes.tableheader}>No. of vehicles</th>
                            <th className={classes.tableheader}>Service fee</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className={classes.tdata}>1</td>
                            <td className={classes.tdata}>$39.99</td>
                          </tr>
                          <tr>
                            <td className={classes.tdata}>2 to 10</td>
                            <td className={classes.tdata}>$49.99</td>
                          </tr>
                          <tr>
                            <td className={classes.tdata}>11 to 24</td>
                            <td className={classes.tdata}>$79.99</td>
                          </tr>
                          <tr>
                            <td className={classes.tdata}>25 to 100</td>
                            <td className={classes.tdata}>$199.99</td>
                          </tr>
                          <tr>
                            <td className={classes.tdata}>101 to 250</td>
                            <td className={classes.tdata}>$299.99</td>
                          </tr>
                          <tr>
                            <td className={classes.tdata}>250 to 5000</td>
                            <td className={classes.tdata}>$599.99</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
};

export default PricingContent;
