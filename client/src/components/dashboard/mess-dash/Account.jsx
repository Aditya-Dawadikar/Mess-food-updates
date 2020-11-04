import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Account = () => {
  return (
    <>
      <div
        onClick={() => {
          window.location = "settings";
        }}
        style={{ transform: "scale(2)" }}
      >
        <AccountCircleIcon style={{ cursor: "pointer" }} />
      </div>
    </>
  );
};

export default Account;
