import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Account = () => {
  return (
    <>
      <div 
      onClick={()=>{window.location='settings'}}
      >
        <AccountCircleIcon style={{cursor:"pointer"}} />
      </div>
    </>
  );
};

export default Account;
