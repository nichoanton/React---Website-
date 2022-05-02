import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <ul className={classes.footer}>
        <li className={classes.footerlist}>
          <a href="/home">Home</a>
        </li>
        <li className={classes.footerlist}>
          <a href="/pricing">Pricing</a>
        </li>
        <li className={classes.footerlist}>
          <a href="/support">Help &amp; Support</a>
        </li>
        <li className={classes.footerlist}>
          <a href="#login">Login</a>
        </li>
        <li className={classes.footerlist}>
          <a href="#aboutus">Registration</a>
        </li>
        <li className={classes.footerlist}>
          <a href="#Aboutus">About Us</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
