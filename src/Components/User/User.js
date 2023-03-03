import React, { useState } from "react";

export const User = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    isChecked: false,
  });

  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
  };
  let handleChange = (event) => {
    let newData = {};
    setUser(event.target.value);
    if (event.target.name === "isChecked") {
      newData[event.target.name] = event.target.checked;
    } else {
      newData[event.target.name] = event.target.value;
    }
    let userData = { ...user, ...newData };
    setUser(userData);
  };

  return (
    <div className="user_form justify-content-between">
    <div className="form_title">User Registration</div>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="form-control"
              id="inputName"
              placeholder="Name"
            />
          </div>
          <div className="form-group col-md-6">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-md-6">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={handleChange}
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="form-group col-md-4">
          <label>State</label>
          <select
            id="inputState"
            name="state"
            value={user.state}
            onChange={handleChange}
            className="form-control"
          >
            <option id="disable" disabled>
              Choose...
            </option>
            <option id="ka">Karnaktka</option>
            <option id="gu">Gujrat</option>
          </select>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={user.city}
              onChange={handleChange}
              placeholder="Benglore"
              className="form-control"
              id="inputCity"
            />
          </div>

          <div className="form-group col-md-2">
            <label>Zip</label>
            <input
              type="text"
              name="zipcode"
              value={user.zipcode}
              onChange={handleChange}
              className="form-control"
              id="inputZip"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              name="isChecked"
              onChange={handleChange}
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label">Check me out</label>
          </div>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
