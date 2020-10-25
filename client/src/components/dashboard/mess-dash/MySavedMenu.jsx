import React, { useEffect, useState } from "react";
import "./MessSettings.css";
import EditIcon from "@material-ui/icons/Edit";
import StarsIcon from "@material-ui/icons/Stars";
import StarsOutlinedIcon from "@material-ui/icons/StarsOutlined";
import { authAxiosMess } from "../../../App";
import DeleteIcon from "@material-ui/icons/Delete";
import Loader from "react-loader-spinner";
import { toast } from "react-toastify";

const MySavedMenu = () => {
  const getId = localStorage.getItem("userIdMess");
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);
  const [menusAdded, setMenusAdded] = useState([]);

  useEffect(() => {
    getMenuList();
  }, [getId]);

  //Get menuList......
  const getMenuList = () => {
    setLoading(true);
    authAxiosMess
      .get(`api/menu/all/${getId}`)
      .then((res) => {
        console.log(res.data);
        setMenu(res.data.Mess);
        setLoading(false);
      })
      .catch((err) =>
        console.log(`${err} :some error while fetching menu list`)
      );
  };

  //Delete menuList......

  const deleteMenuList = (id) => {
    authAxiosMess
      .delete(`api/menu/delete/${getId}/${id}`)
      .then((res) => {
        getMenuList();
        toast.warning("menu list updated");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCurrentMenuList();
  }, []);

  //get all Currentmenu List....

  const getCurrentMenuList = () => {
    authAxiosMess
      .get("/api/currentmenu/all")
      .then((res) => {
        console.log(res);
        setMenusAdded(res.data.availableMenus);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  //Check if particular menu is currentMenu or not...

  const currentMenuExists = (id) => {
    return menusAdded.find((x) => x.identification.menuId === id) ? 1 : 0;
  };

  //Add currentMenu....

  const addCurrentMenu = (menuId) => {
    authAxiosMess
      .post(`/api/currentmenu/new`, {
        messId: getId,
        menuId: menuId,
      })
      .then((res) => {
        console.log(res.data);
        getCurrentMenuList();
        toast.success("Updated Current Menu");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error updating Current menu");
      });
  };

  //Delete CurrentMenu....

  function findPostId(menu, menuId) {
    for (let i = 0; i < menu.length; i++) {
      if (menu[i].identification.menuId === menuId) {
        return menu[i].identification.postId;
      }
    }
  }

  const removeCurrentMenu = (menuId) => {
    const postId = findPostId(menusAdded, menuId);
    // console.log(postId);
    authAxiosMess
      .delete(`/api/currentmenu/delete/${postId}`)
      .then((res) => {
        // console.log(res);
        getCurrentMenuList();
        toast.info("Removed Current Menu");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error removing Current menu");
      });
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
          <div>
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
                  </li>
                  <li
                    className="font-weight-bold"
                    style={{ color: "#FF5C00", letterSpacing: "2px" }}
                  >
                    {item.price} INR
                  </li>
                  <li>{item.tag[0]}</li>
                  <li>
                    {currentMenuExists(item._id) ? (
                      <StarsIcon
                        style={{ color: "#FFB800", cursor: "pointer" }}
                        onClick={() => removeCurrentMenu(item._id)}
                      />
                    ) : (
                      <StarsOutlinedIcon
                        style={{ color: "#FFB800", cursor: "pointer" }}
                        onClick={() => addCurrentMenu(item._id)}
                      />
                    )}
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
