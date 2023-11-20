import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../styling/TouchScreenView.css';
import Inputs from '../components/inputs';


const VerificationView = () => {
    return (
        <div className="touch-screen-container">
            <div className="tablet-layout">
           <Inputs/>
            </div>
            
        </div>
    );
}
export default VerificationView;