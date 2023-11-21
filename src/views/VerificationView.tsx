import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../styling/TouchScreenView.css';
import Inputs from '../components/inputs';

interface VerificationViewProps {
    deliveryAction: string;
}
// bring the action from the welcome view to the verification view as props
const VerificationView: React.FC<VerificationViewProps>= ({deliveryAction}) => {
    console.log(deliveryAction);

    return (
        <div className="touch-screen-container">
            <div className="tablet-layout">
           <Inputs/>
            </div>
            
        </div>
    );
}
export default VerificationView;