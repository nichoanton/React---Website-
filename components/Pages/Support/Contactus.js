import { Fragment } from "react";
import { Table, Button, Container } from "react-bootstrap";
import classes from "./Contactus.module.css";

const ContactUs = () => {
  return (
    <Fragment>
      <div className={classes.contactusheader}>Contact Us</div>
      <div className={classes.contusbody}>
        <Table className={classes.bodycontact}>
          <tbody>
            <tr className={classes.tableborder}>
              <td className={classes.tableborder}>Full Name</td>
              <td className={classes.tableborder}>
                <input></input>
              </td>
            </tr>
            <tr className={classes.tableborder}>
              <td className={classes.tableborder}>Email</td>
              <td className={classes.tableborder}>
                <input></input>
              </td>
            </tr>
            <tr className={classes.tableborder}>
              <td className={classes.tableborder}>Subject</td>
              <td className={classes.tableborder}>
                <input></input>
              </td>
            </tr>
            <tr className={classes.tableborder}>
              <td className={classes.tableborder}>Description</td>
              <td className={classes.tableborder}>
                <textarea></textarea>
              </td>
            </tr>
          </tbody>
        </Table>
        <Button className={classes.btncontactus}>Submit</Button>
        <Container className={classes.contactaddr}>
          <div>YTT LLC</div>
          <div>PO Box 283</div>
          <div>WESTFORD, MA 01886</div>
          <div>866-246-4334</div>
        </Container>
      </div>
    </Fragment>
  );
};

export default ContactUs;
