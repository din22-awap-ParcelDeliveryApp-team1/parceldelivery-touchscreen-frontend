import React from 'react';

interface CodeViewerProps {
  code: string;
}

const CodeViewer: React.FC<CodeViewerProps> = ({ code }) => {
  const formattedCode = code.padStart(4, ' ');

  return (
    <div className="code-viewer">
      {formattedCode.split('').map((digit, index) => (
        <div key={index} className="digit">
          {digit}
        </div>
      ))}
    </div>
  );
};

export default CodeViewer;
