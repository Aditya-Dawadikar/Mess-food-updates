import React, { useEffect, useState } from "react";
import messImg from "../../../imgs/food1_1.jpg";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import "./MessSettings.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const EditProfile = () => {
  const getId = localStorage.getItem("userIdMess");

  const [mess, setMess] = useState({
    messName: "",
    ownerName: "",
    email: "",
    address: "",
  });

  const [messImage, setMessImage] = useState({
    profileImg: messImg,
  });

  const [visible, setVisible] = useState(false);
  const [changeImg, setChangeimg] = useState(false);

  const imageHandler = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setMessImage({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const { messName, ownerName, email, address } = mess;

  const changeEvent = (e) => {
    const { name, value } = e.target;
    setMess({ ...mess, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:9000/api/mess/${getId}`)
      .then((res) => {
        console.log(res.data);
        setMess({
          messName: res.data.Mess[0].messDetails.messName,
          ownerName: res.data.Mess[0].messDetails.ownerName,
          address: res.data.Mess[0].messDetails.address,
          email: res.data.Mess[0].email,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [getId]);

  return (
    <>
      <form style={{ width: "70%" }}>
        <div className="edit-profile ml-1 container">
          <div className="photo container mt-3" style={{ height: "15rem" }}>
            <div className="label">
              <div
                className="messImgUpload"
                style={{ position: "absolute", borderRadius: "10px" }}
              >
                <label className="image-upload" htmlFor="input">
                  <div
                    className="mess-img"
                    onMouseEnter={() => {
                      setChangeimg(true);
                    }}
                    onMouseLeave={() => {
                      setChangeimg(!changeImg);
                    }}
                  >
                    <img
                      src={messImage.profileImg}
                      alt="mess-img"
                      style={{
                        height: "175px",
                        width: "250px",
                        borderRadius: "10px",
                        border: "1px solid black",
                      }}
                    />
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    name="image-upload"
                    id="input"
                    onChange={imageHandler}
                  />
                </label>
              </div>
              {changeImg ? (
                <div className="hover__icon" onChange={imageHandler}>
                  <AddPhotoAlternateIcon
                    className="hover__img"
                    style={{
                      height: "50px",
                      width: "50px",
                      filter: "invert(1)",
                    }}
                  />
                  <h5 className="text-white" style={{ position: "initial" }}>
                    Change Photo
                  </h5>
                </div>
              ) : null}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="MessName">Mess Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Mess Name"
                id="MessName"
                name="messName"
                value={messName}
                onChange={(e) => changeEvent(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="OwnerName">Owner Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Owner Name"
                id="OwnerName"
                name="ownerName"
                value={ownerName}
                onChange={(e) => changeEvent(e)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="abc@gmail.com"
                name="email"
                value={email}
                onChange={(e) => changeEvent(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Password</label>
              <input
                type={visible ? "text" : "password"}
                className="form-control"
                id="inputPassword4"
                placeholder="password"
                autoComplete="off"
              />
              <span
                className="password-toogle-icon"
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                {visible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Address..."
              name="address"
              value={address}
              onChange={(e) => changeEvent(e)}
              style={{ height: "100px" }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-warning text-white d-block mx-auto"
            style={{ width: "7rem" }}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default EditProfile;
