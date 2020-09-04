import React from "react";


const Mess_user2 = () => {
  return (
    <>
      
        <form style={{ border: "2px solid red", width: "70%" }}>
          <div className="edit-profile ml-1 container">
            <div
              className="photo container mt-3"
              style={{ border: "2px solid red", height: "10rem" }}
            >
              <div className="form-group">
                <label for="exampleFormControlFile1">Example file input</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
            </div>
            <div className="form-group">
              <label for="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div className="form-group">
              <label for="inputAddress2">Address 2</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
    </>
  );
};

export default Mess_user2;
