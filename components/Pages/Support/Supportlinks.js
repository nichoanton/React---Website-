import { Button } from 'react-bootstrap';
import classes from './Supportlinks.module.css';

const Supportlinks = () => {
    return (
        <div className={classes.Supportlinks}>
            <strong className={classes.slinks}><a  href="Support/Form2290/IRS-Form-2290.aspx">IRS Form 2290</a></strong>
            <strong className={classes.slinks}><a  href="Support/Form2290/Efile-Form-2290.aspx">Efile Form 2290</a></strong>
            <strong className={classes.slinks}><a  href="Support/Form2290/When-to-File-Form-2290.aspx">When to File Form 2290</a></strong>
            <strong className={classes.slinks}><a  href="Support/Form2290/What-if-I-Dont-File-Form-2290.aspx">What if I Don't File Form 2290</a></strong>
            <strong className={classes.slinks}><a  href="Support/Form2290/Contact-the-IRS-Regarding-Form-2290.aspx">Contact the IRS Regarding Form 2290</a></strong>
            <strong className={classes.slinks}><a  href="Support/Form2290/IRS-Form-2290-Vehicles.aspx">IRS Form 2290 Vehicles</a></strong>
            <strong className={classes.slinks}><a  href="Support/Form2290/IRS-Tax-Form-2290-Definitions.aspx">IRS Tax Form 2290 Definitions</a></strong>
            <strong className={classes.slinks}><a  href="Support/Form2290/IRS-Tax-Form-2290-Taxable-Gross-Weight.aspx">IRS Tax Form 2290 Taxable Gross Weight</a></strong>
            <strong className={classes.slinks}><a  href="Support/Form2290/IRS-Form-2290-Suspension-of-Tax.aspx">Suspension of Tax</a></strong>
            <br/>
            <Button href='/support/contact_us' className={classes.btnsupport} size='sm'>CONTACT US</Button>
        </div>
    );
};

export default Supportlinks;