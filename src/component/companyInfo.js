
import React, { useState } from 'react';

const CompanyInfo = () => {
  const [displayContent, setDisplayContent] = useState(null);

  const handleButtonClick = () => {
    setDisplayContent(!displayContent);
  };

  return (
    <div>
      <button className='btn btn-warning' onClick={handleButtonClick}>Company Info</button>
      {displayContent && (
        <div>
          <b>Company Name :</b> Geeksynergy technologies Pvt Ltd <br />
          <b>Address :</b> Sanjayanagar, Bengaluru-56 <br/>
          <b>Phone :</b> XXXXXXXX09 <br />
          <b>Email: </b> <a href="xxxxx@gmail.com">XXXX@gmail.com</a>
        </div>
      )}
    </div>
  );
};

export default CompanyInfo;