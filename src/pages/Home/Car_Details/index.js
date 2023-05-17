import React, { useEffect, useRef, useState } from "react";

import Button from "../../../components/Button";
import Card from "../../../components/Cards";
import FetchData from "../../../components/FetchData";
import Model from "../../../components/Model";
import Form from "../../../components/Models/Create";
import Delete from "../../../components/Models/Delete";

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
  const [delId, setDelId] = useState("");
  const [editId, setEditId] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const carData = { carName, carModal, carColor, carCompany };
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
            <div className="col-5">
              {/* <Card
                card_title="Total Cars :"
                card_desc_title={carDetails.length}
                card_desc_title_style="mt-5 text-end fs-3"
                card_style="bg-light shadow-sm border-0"
              /> */}
              <div class="mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="fw-bold text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Total Cars
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800 py-3">
                          {carDetails.length}
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="fa fa-car fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5 m-auto">
              <Card
                card_title="Total Category :"
                card_desc_title={carDetails.length}
                card_desc_title_style="mt-5 text-end fs-3"
                card_style="bg-light shadow-sm border-0"
              />
            </div>
          </div>
        </div>
        <div className="bg-light">
          <div className="container py-5">
            <div className="row">
              <div className="text-center">
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
                <div class="col-sm-12 col-md-6">
                  <div class="dataTables_length" id="dataTable_length">
                    <label>
                      Show{" "}
                      <select
                        name="dataTable_length"
                        aria-controls="dataTable"
                        className="custom-select custom-select-sm form-control form-control-sm"
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                      entries
                    </label>
                  </div>
                </div>
                <div class="card-body">
                  <div className="table-responsive">
                    <table
                      className="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellspacing="0"
                    >
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Model</th>
                          <th scope="col">Company</th>
                          <th scope="col">Color</th>
                          <th scope="col" className="w-25">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {carDetails.map((car, index) => {
                          return (
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{car.carName}</td>
                              <td>{car.carModal}</td>
                              <td>{car.carCompany}</td>
                              <td>{car.carColor}</td>
                              <td>
                                <Button
                                  type="button"
                                  className="btn btn-primary mx-2"
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
                                  className="btn btn-danger mx-2"
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
