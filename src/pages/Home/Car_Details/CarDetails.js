import React, { useEffect, useRef, useState } from "react";

import Button from "../../../components/Button";
import Card from "../../../components/Cards";
import FetchData from "../../../components/FetchData";
import Model from "../../../components/Model";
import Form from "../../../components/Models/Create";
import Delete from "../../../components/Models/Delete";
import Pagination from "../../../components/Pagination/Pagination";

const CarDetails = () => {
  const [carName, setCarName] = useState("");
  const [carNameErr, setCarNameErr] = useState("");
  const [carModal, setCarModal] = useState("");
  const [carModalErr, setCarModalErr] = useState("");
  const [carColor, setCarColor] = useState("");
  const [carColorErr, setCarColorErr] = useState("");
  const [carCompany, setCarCompany] = useState("");
  const [carCompanyErr, setCarCompanyErr] = useState("");
  const [carDetails, setCarDetails] = useState([]);
  const [category, setCategory] = useState([]);
  const [carCategory, setCarCategory] = useState();
  const [delId, setDelId] = useState("");
  const [editId, setEditId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [order, setOrder] = useState("ASC");
  useEffect(() => {
    fetchData();
    FetchData("GET", "http://localhost:5000/categories")
      .then((resp) => {
        setCategory(resp);
      })
      .catch((err) => {
        console.log(err.msg);
      });
  }, []);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = carDetails.slice(firstPostIndex, lastPostIndex);
  const carData = { carName, carModal, carColor, carCompany, carCategory };
  const Sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...carDetails].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setCarDetails(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...carDetails].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setCarDetails(sorted);
      setOrder("ASC");
    }
  };
  function fetchData() {
    FetchData("GET", "http://localhost:5000/car")
      .then((resp) => {
        setCarDetails(resp);
      })
      .catch((err) => {
        console.log(err.msg);
      });
  }
  const CarNameHandle = (e) => {
    let CarName = e.target.value;
    setCarName(CarName);
  };
  const CarModalHandle = (e) => {
    let CarModal = e.target.value;
    setCarModal(CarModal);
  };
  const CarColorHandle = (e) => {
    let CarColor = e.target.value;
    setCarColor(CarColor);
  };
  const CompanyNameHandle = (e) => {
    let CarCompany = e.target.value;
    setCarCompany(CarCompany);
  };
  // <-- Create Car Details Function -->
  const CreateCar = () => {
    FetchData("POST", "http://localhost:5000/car", carData)
      .then((res) => {
        fetchData();
        setCarCompany("");
        setCarColor("");
        setCarName("");
        setCarModal("");
        setCarCategory("");
      })
      .catch((err) => {
        console.log(err.msg);
      });
  };
  // <-- Delete Car Details Function -->
  const loadDel = (id) => {
    FetchData("DELETE", "http://localhost:5000/car/" + id)
      .then(() => {
        fetchData();
      })
      .catch((err) => {
        console.log(err.msg);
      });
  };
  // <-- Edit Car Details Function -->

  const loadEdit = (item) => {
    setCarCompany(item.carCompany);
    setCarColor(item.carColor);
    setCarName(item.carName);
    setCarModal(item.carModal);
    setEditId(item.id);
  };

  function update(editId) {
    FetchData("PUT", "http://localhost:5000/car/" + editId, carData)
      .then(() => {
        fetchData();
        setCarCompany("");
        setCarColor("");
        setCarName("");
        setCarModal("");
        setCarCategory("");
      })
      .catch((err) => {
        console.log(err.msg);
      });
  }

  // <--- close Modal Fonction -->
  const close = () => {
    setCarCompany("");
    setCarColor("");
    setCarName("");
    setCarModal("");
  };
  return (
    <>
      <div className="pt-5">
        <h2 className="pt-3 text-center">Car Details</h2>
        <div className="container my-5">
          <div className="row">
            <div className="mb-4 col-md-4 col-sm-6 col-12 m-auto">
              <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="fw-bold text-xs font-weight-bold text-primary text-uppercase mb-1">
                        Total Cars
                      </div>
                      <div className="fs-2 fw-bold mb-0 font-weight-bold text-gray-800 py-3">
                        {carDetails.length}
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fa fa-car fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light">
          <div className="container py-5">
            <div className="row">
              <div className="text-end">
                <button
                  className="btn btn-success my-2"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#createModal"
                >
                  Add New Car
                </button>
              </div>
              <div className="card shadow mb-4">
                <div className="card-body">
                  <div className="dataTables_length my-2" id="dataTable_length">
                    <span className="fw-bold">Show Entries</span>
                    <select
                      name="dataTable_length"
                      aria-controls="dataTable"
                      className="custom-select custom-select-sm form-control"
                      style={{ width: "70px" }}
                      onChange={(e) => setPostsPerPage(e.target.value)}
                    >
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                  </div>
                  <div className="table-responsive">
                    <table
                      className="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellSpacing="0"
                    >
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col" onClick={() => Sorting("name")}>
                            Name
                          </th>
                          <th scope="col" onClick={() => Sorting("model")}>
                            Model
                          </th>
                          <th scope="col" onClick={() => Sorting("company")}>
                            Company
                          </th>
                          <th scope="col" onClick={() => Sorting("color")}>
                            Color
                          </th>
                          <th scope="col" onClick={() => Sorting("category")}>
                            Category
                          </th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentPosts.map((car, index) => {
                          return (
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{car.carName}</td>
                              <td>{car.carModal}</td>
                              <td>{car.carCompany}</td>
                              <td>{car.carColor}</td>
                              <td>{car.carCategory}</td>
                              <td>
                                <Button
                                  type="button"
                                  className="btn btn-primary m-2"
                                  data_toogle="modal"
                                  data_target="#editModal"
                                  click={() => {
                                    loadEdit(car);
                                  }}
                                >
                                  Edit
                                </Button>
                                <Button
                                  type="button"
                                  className="btn btn-danger m-2"
                                  data_toogle="modal"
                                  data_target="#delete"
                                  click={() => {
                                    setDelId(car.id);
                                  }}
                                >
                                  Delete
                                </Button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    <Pagination
                      totalPosts={carDetails.length}
                      postsPerPage={postsPerPage}
                      setCurrentPage={setCurrentPage}
                      currentPage={currentPage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Model
        Model_id="createModal"
        Model_Title="Create Car Details"
        Danger_btn_fun={close}
        Success_btnText="Create"
        Success_btn_fun={CreateCar}
      >
        <Form
          CarName={carName}
          CarNameHandle={CarNameHandle}
          CarModalName={carModal}
          CarModalHandle={CarModalHandle}
          CarColor={carColor}
          CarColorHandle={CarColorHandle}
          CompanyName={carCompany}
          CompanyNameHandle={CompanyNameHandle}
        />
        <div className="dataTables_length my-2" id="dataTable_length">
          <span className="fw-bold">Select Category</span>
          <select
            name="category"
            className="custom-select custom-select-sm form-control"
            value={carCategory}
            onChange={(e) => setCarCategory(e.target.value)}
          >
            {category.map((cat, index) => {
              <option value="Select">Select</option>;
              return (
                <>
                  <option key={index}>{cat.selectCategory}</option>
                </>
              );
            })}
          </select>
        </div>
      </Model>
      <Delete
        Del_id="delete"
        loadDel={loadDel}
        DelId={delId}
        description="Car item"
      />
      <Model
        Model_id="editModal"
        Model_Title="Edit Car Details"
        Danger_btn_fun={close}
        Success_btnText="Update"
        Success_btn_fun={() => update(editId)}
      >
        <Form
          CarName={carName}
          CarNameHandle={CarNameHandle}
          CarModalName={carModal}
          CarModalHandle={CarModalHandle}
          CarColor={carColor}
          CarColorHandle={CarColorHandle}
          CompanyName={carCompany}
          CompanyNameHandle={CompanyNameHandle}
        />
      </Model>
    </>
  );
};

export default CarDetails;
