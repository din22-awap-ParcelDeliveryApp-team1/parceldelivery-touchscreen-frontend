import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const VerificationView = () => {
    return (
        <div className="verification-view">
            <div className="verification-view__header">
                <h1 className="verification-view__header__title">Verification</h1>
                <div className="verification-view__header__icon">
                    <FontAwesomeIcon icon="check-circle" size="2x"/>
                </div>
            </div>
            <div className="verification-view__body">
                <p className="verification-view__body__text">Your parcel has been successfully delivered.</p>
            </div>
        </div>
    );
}
export default VerificationView;