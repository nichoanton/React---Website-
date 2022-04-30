import { Table } from "react-bootstrap";

import classes from './TableContent.module.css';

const TableContent = () => {
  return (
    <Table className={classes.tablecontent}>
      <tbody className={classes.tablebody}>
        <tr>
          <td>
            <strong>
              <a className={classes.anchor} href="https://www.yourtrucktax.com/Tax/Form2290/2290-Electronic-Filing.aspx">What is 2290 Electronic filing?</a>
            </strong>
          </td>
          <td>
            <strong>
              <a className={classes.anchor} href="https://www.yourtrucktax.com/Tax/Form2290/2290-Heavy-Vehicle-Use-Tax.aspx">What is Heavy Vehicle Use Tax?</a>
            </strong>
          </td>
          <td>
            <strong>
              <a className={classes.anchor} href="https://www.yourtrucktax.com/Tax/Form2290/Do%20I%20have%20to%20pay%20the%20full%20amount%20of%20the%20Heavy%20Highway%20Vehicle%20Use%20Tax.aspx">
                Do I have to pay the full amount of the Heavy Highway Vehicle
                Use Tax?
              </a>
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <strong>
              <a className={classes.anchor} href="https://www.yourtrucktax.com/Tax/Form2290/2290%20Excise%20Tax.aspx">IRS Tax Form 2290?</a>
            </strong>
          </td>
          <td>
            <strong>
              <a className={classes.anchor} href="https://www.yourtrucktax.com/Tax/Form2290/Paying%20Heavy%20Highway%20Vehicle%20Use%20Tax%20when%20buying%20used%20vehicles.aspx">
                Do I have to pay Heavy Highway Vehicle Use Tax for the whole
                year if I buy a truck in February that has not been used on the
                highway since the prior July?
              </a>
            </strong>
          </td>
          <td>
            <strong>
              <a className={classes.anchor} href="https://www.yourtrucktax.com/Tax/Form2290/Things-To-Know-About-Truck-Tax.aspx">
                YourTruckTax.com will let you try the service for free
              </a>
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <strong>
              <a className={classes.anchor} href="#Truck taxes">
                Three Reasons You Should E-File Your Truck Taxes Today
              </a>
            </strong>
          </td>
          <td>
            <strong>
              <a className={classes.anchor} href="#Heavy Vehicle">What is Heavy Vehicle Use Tax?</a>
            </strong>
          </td>
          <td>
            <strong>
              <a className={classes.anchor} href="#Tax Season">
                The Best Prepping Practices for the Truck Tax Season
              </a>
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <strong>
              <a className={classes.anchor} href="#Easy">Truck Tax Form 2290 Made Easy</a>
            </strong>
          </td>
          <td>
            <strong>
              <a className={classes.anchor} href="#Tax Season">
                The Best Prepping Practices for the Truck Tax Season
              </a>
            </strong>
          </td>
          <td>
            <strong>
              <a className={classes.anchor} href="#Tax office">How You Can Turn Your Truck into a Tax Office?</a>
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <strong>
              <a className={classes.anchor} href="#2290">5 Things You Need to Know About the Truck Tax 2290</a>
            </strong>
          </td>
          <td>
            <strong>
              <a className={classes.anchor} href="#Adv">3 Advantages of E-Filing Your Truck Tax</a>
            </strong>
          </td>
          <td>
            <strong>
              <a className={classes.anchor} href="#Reason">
                Three Reasons You Should E-File Your Truck Taxes Today
              </a>
            </strong>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableContent;
