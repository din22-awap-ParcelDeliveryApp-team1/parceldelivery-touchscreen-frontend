import { Link } from 'react-router-dom';
import phone from '../images/phone.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/Welcome.css';
import logo from '../images/logo_driveme.png';


const SelectView = () => {

	return (
		<div className="welcomeBody">
			<div className="welcomeHeader">
				<div>
				<img className='logo' src={logo} alt="Logo"  />
				</div>
				<div>
					<h2 className='headerText'>Welcome to Parcel Delivery</h2>
				</div>
			</div>
			<div className='text'>
				<h3>Please select service below</h3>
			</div>
			<div className="texts">
				<h5>Drop off parcel: send a parcel with <strong>Dropoff Code</strong></h5>
				<h5>Pick up parcel: collect a parcel with <strong>Pickup Code</strong></h5>
			</div>
			<div className="buttons">
				<Link to="/dropoff">
					<button id='dropBtn' className='btn btn-warning' type="button">Dropoff</button>
				</Link>
				<Link to="/pickup">
					<button id='pickBtn' className='btn btn-success' type="button">Pickup</button>
				</Link>
			</div>
			<div className='phone'>
				<img src={phone} alt="phone" className="mb-3"/>
				<p>+358 050 1234567</p>
			</div>
		</div >
	);
};

export default SelectView;
