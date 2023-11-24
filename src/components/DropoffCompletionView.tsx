import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface DropoffCompletionViewProps {
    message: string;
    onCompleteDropoff: () => void;
  }
  
  const DropoffCompletionView: React.FC<DropoffCompletionViewProps> = ({ message, onCompleteDropoff }) => {
    return (
      <div className="mt-5">
        {message && <div className="message mt-3">{message}</div>}
        <Link to="/">
        <button type="button" className="btn btn-lg btn-warning input-button mt-5" onClick={onCompleteDropoff}>
          Close Door
        </button>
        </Link>  
      </div>
    );
  };
  
  export default DropoffCompletionView;
