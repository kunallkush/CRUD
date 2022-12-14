import React, { useState, useEffect } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons/lib/icons";
import { Button } from "antd";
function Todo() {
  let setLocalItem = () => {
    let items = localStorage.getItem("data");
    if (items) {
      return JSON.parse(localStorage.getItem("data"));
    } else {
      return [];
    }
  };
  const [loading, setLoading] = useState(true);

  const [inputData, setinputData] = useState("");
  const [data, setData] = useState(setLocalItem());
  const [updateItem, setUpdateItem] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setinputData({
      ...inputData,
      [name]: value,
    });
  };

  const addItems = (e) => {
    e.preventDefault();
    if (!inputData) {
        console.log("pls fill the details");
    } else if (inputData && !loading) {
      setData(
        data.map((elm, index) => {
          if (elm.id === updateItem) {      
            return { ...elm, inputData };
          }
          return elm;
        })
      );
      setLoading(false);
      setinputData({ firstName: "", lastName: "" });
      setUpdateItem(null);
      console.log("updated");
    } else {
      setData([...data, inputData]);
      setinputData({ firstName: "", lastName: "" });
    }
  };

  const handleDelete = (id) => {
    const latestItem = data.filter((elm, index) => {
      return index !== id;
    });
    setData(latestItem);
  };

  const handleEdit = (id) => {
    let editItem = data.find((elm, index) => {
      return index === id;
    });
    console.log(editItem);
    setLoading(false);    
    setinputData(editItem);
    setUpdateItem(id);
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <form>
          <div className="mb-3">
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
          <div className="mb-3">
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
          <div className="d-flex justify-content-center">
            <button
              type="button "
              className="btn btn-primary"
              onClick={addItems}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className=" d-flex  w-50 m-auto mt-5">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>
                    <div className="d-flex justify-content-start align-items-center ">
                      <i className="fa fa-regular fa-pen-to-square"></i>
                      <Button
                        className="me-2"
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(i)}
                      ></Button>
                      <Button
                        icon={<DeleteOutlined />}
                        danger
                        size="middle"
                        onClick={() => {
                          handleDelete(i);
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

export default Todo;
