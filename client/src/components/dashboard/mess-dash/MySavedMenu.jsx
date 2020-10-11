import React, { useEffect, useState } from "react";
import "./MessSettings.css";
import EditIcon from "@material-ui/icons/Edit";
import StarsIcon from "@material-ui/icons/Stars";
import { authAxiosMess } from "../../../App";
import DeleteIcon from "@material-ui/icons/Delete";
import Loader from "react-loader-spinner";
// import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
// import { Link } from "react-router-dom";

const MySavedMenu = () => {
  const getId = localStorage.getItem("userIdMess");
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMenuList();
  }, [getId]);

  const getMenuList = () => {
    setLoading(true);
    authAxiosMess
      .get(`api/menu/all/${getId}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setMenu(res.data.Mess);
        setLoading(false);
      })
      .catch((err) =>
        console.log(`${err} :some error while fetching menu list`)
      );
  };

  const editMenuList = () => {
    //edit MenuList Logic....
    //need get request api of /api/mess/:messid/:mmenuid
  };

  const deleteMenuList = (id) => {
    authAxiosMess
      .delete(`api/menu/delete/${getId}/${id}`)
      .then((res) => getMenuList())
      .catch((err) => console.log(err));
  };

  return (
    <div className="mt-4" style={{ width: "70%" }}>
      {loading ? (
        <Loader
          type="ThreeDots"
          color="#FFB800"
          height="100"
          width="100"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      ) : (
        <div className="edit-profile ml-1 container">
          <div style={{ backgroundColor: "#FFF8DE" }}>
            {menu.map((item) => {
              return (
                <ul
                  key={item._id}
                  className="col sm-12 d-flex justify-content-between align-items-center bg-white"
                  style={{
                    borderRadius: "5px",
                    height: "75px",
                    borderLeft: "8px solid #FFB800",
                  }}
                >
                  <li>
                    <ul className="d-flex pl-0">
                      {item.menuItem.map((idx) => {
                        return (
                          <li className="mr-2" key={idx._id}>
                            {idx.itemName}
                          </li>
                        );
                      })}
                      <img
                        src="https://img.icons8.com/color/20/000000/vegetarian-food-symbol.png"
                        alt="veg"
                      />
                      {/* <FiberManualRecordIcon/> */}
                    </ul>
                    {/* Aloo Sabji, Roti, Dal Rice, Papad, Pickle, Taak */}
                  </li>
                  <li
                    className="font-weight-bold"
                    style={{ color: "#FF5C00", letterSpacing: "2px" }}
                  >
                    {item.price} INR
                  </li>
                  <li>{item.tag[0]}</li>
                  <li>
                    <StarsIcon
                      style={{ color: "#FFB800", cursor: "pointer" }}
                    />
                  </li>
                  <li>
                    <EditIcon
                      style={{ color: "#FFB800", cursor: "pointer" }}
                      onClick={() => (window.location = `editmenu/${item._id}`)}
                    />
                  </li>
                  <li className="mr-3">
                    <DeleteIcon
                      style={{ color: "#FFB800", cursor: "pointer" }}
                      onClick={() => deleteMenuList(item._id)}
                    />
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MySavedMenu;
