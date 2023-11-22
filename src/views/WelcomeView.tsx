import { useState } from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import '../styling/Welcome.css';
import phone from '../images/phone.svg'
import VerificationView from './VerificationView';

interface WelcomeViewProps {
    navigate: NavigateFunction;
  }

  const WelcomeView: React.FC<WelcomeViewProps> = ({ navigate }) => {

    const [deliveryAction, setDeliveryAction] = useState<string | null>(null);

    const handleLinkAction = (action: string) => {
        setDeliveryAction(action);
        navigate(`/verification?deliveryAction=${action}`);
    };

    return (
        <>
            {deliveryAction ? (<VerificationView deliveryAction={deliveryAction} />)
                : (
                    <div className="welcomeBody">
                        <div className="welcomeHeader">
                            <div>
                                <img className='logo' src="" alt="Logo" />
                            </div>
                            <div>
                                <h3 className='headerText'>Welcome to Parcel Delivery</h3>
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
                            <div>
                                <button id="deliveryBtn" onClick={() => handleLinkAction("dropoff")}>Drop Parcel</button>
                            </div>
                            <div>
                                <button id="pickupBtn" onClick={() => handleLinkAction("pickup")}>Pick Parcel</button>
                            </div>
                        </div>
                        <div className='phone'>
                            <img src={phone} alt="phone" />
                            <p>+358 050 1234567</p>
                        </div>
                    </div>
                )}
        </>
    );
};

export default WelcomeView;