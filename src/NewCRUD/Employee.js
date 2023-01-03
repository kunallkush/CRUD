import React from "react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons/lib/icons";
import { Button } from "antd";
import { json } from "react-router-dom";

function Employee() {
  let setLocalItem = () => {
    let items = localStorage.getItem("userData");
    if (items) {
      return JSON.parse(localStorage.getItem("userData"));
    } else {
      return [];
    }
  };
  const [inputData, setInputData] = useState("");
  const [data, setData] = useState(setLocalItem());
  const [loading,setLoading]=useState(true)
  const updateId = useRef();
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(data));
  }, [data]);

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };
   //**To add items */

   const addItems = (e) => {
    e.preventDefault();
    if (!inputData) {
      alert("please fill the details");
    } 
    else if (inputData && !loading) {
      setData(
        data.map((elm, index) => {
          if (elm.id == updateId.current) {
            return { ...elm, inputData: inputData };
          } else {
            return elm;
          }
        })
      );
      setLoading(true)
      setInputData({
        firstName: "",
        lastName: "",
        age: "",
        contact: "",
        email: "",
        address: "",
        dob: "",
      });
      updateId.current = "";
    } 
    else {
      const dataWithUniqueId = {
        id: new Date().getTime().toString(),
        inputData: inputData,
      };
      setData([...data, dataWithUniqueId]);
      setInputData({
        firstName: "",
        lastName: "",
        age: "",
        contact: "",
        email: "",
        address: "",
        dob: "",
      });
    }
  };

  //**To Edit Items */

  const handleEdit = (id) => {
    let itemToEdit = data.find((elm, index) => {
      return elm.id === id;
    });
    setInputData(itemToEdit.inputData);

    updateId.current = id;

    setLoading(false)
  };

  //**To delete Items */

  const handleDelete = (index) => {
    let itemToDel = data.filter((item) => {
      return index !== item.id;
    });
    setData(itemToDel);
  };

 
  return (
    <>
      {" "}
      <div className="container">
        <p className="fs-1 mb-5" style={{ textAlign: "center" }}>
          Employee Registration
        </p>
        <form className="d-flex justify-content-center row">
          <div className="mb-3 col-md-4">
            <label className="form-label">First Name</label>
            <input
              value={inputData.firstName}
              name="firstName"
              onChange={handleChange}
              type="text"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="mb-3 col-md-4">
            <label className="form-label">Last Name</label>
            <input
              value={inputData.lastName}
              name="lastName"
              onChange={handleChange}
              type="text"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="mb-3 col-md-4">
            <label className="form-label">Address</label>
            <input
              value={inputData.address}
              name="address"
              onChange={handleChange}
              type="text"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="mb-3 col-md-4">
            <label className="form-label">Age</label>
            <input
              value={inputData.age}
              name="age"
              onChange={handleChange}
              type="text"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="mb-3 col-md-4">
            <label className="form-label">Contact No.</label>
            <input
              value={inputData.contact}
              name="contact"
              onChange={handleChange}
              type="text"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="mb-3 col-md-4">
            <label className="form-label">D.O.B</label>
            <input
              value={inputData.dob}
              name="dob"
              onChange={handleChange}
              type="text"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="mb-3 col-md-4">
            <label className="form-label">Email</label>
            <input
              value={inputData.email}
              name="email"
              onChange={handleChange}
              type="text"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit "
              className="btn btn-primary"
              onClick={addItems}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className=" d-flex p-3  m-auto mt-5">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Address</th>
              <th scope="col">Age</th>
              <th scope="col">Contact No.</th>
              <th scope="col">DOB</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => {
              return (
                <tr key={data.id}>
                  <td>{i + 1}</td>
                  <td>{data.inputData.firstName}</td>
                  <td>{data.inputData.lastName}</td>
                  <td>{data.inputData.address}</td>
                  <td>{data.inputData.age}</td>
                  <td>{data.inputData.contact}</td>
                  <td>{data.inputData.dob}</td>
                  <td>{data.inputData.email}</td>

                  <td>
                    <div className="d-flex justify-content-start align-items-center ">
                      <i className="fa fa-regular fa-pen-to-square"></i>
                      <Button
                        className="me-2"
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(data.id)}
                      ></Button>
                      <Button
                        icon={<DeleteOutlined />}
                        danger
                        size="middle"
                        onClick={() => {
                          handleDelete(data.id);
                        }}
                      ></Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Employee;
