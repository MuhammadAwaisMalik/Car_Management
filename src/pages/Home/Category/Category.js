import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import Model from "../../../components/Model";
import FetchData from "../../../components/FetchData";
import Delete from "../../../components/Models/Delete";
import Input from "../../../components/Input";

const Category = () => {
  const [categories, setCategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");
  const [delId, setDelId] = useState("");
  const [editId, setEditId] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    FetchData("GET", "http://localhost:5000/categories")
      .then((resp) => {
        setCategory(resp);
      })
      .catch((err) => {
        console.log(err.msg);
      });
  }
  const cat = { selectCategory };
  //   <-- Create Category -->
  const CreateCateg = () => {
    FetchData("POST", "http://localhost:5000/categories", cat)
      .then((res) => {
        fetchData();
        setSelectCategory("");
      })
      .catch((err) => {
        console.log(err.msg);
      });
  };
  // <-- Delete Car Details Function -->
  const loadDel = (id) => {
    FetchData("DELETE", "http://localhost:5000/categories/" + id)
      .then(() => {
        fetchData();
      })
      .catch((err) => {
        console.log(err.msg);
      });
  };
  // <-- Edit Car Details Function -->

  const loadEdit = (item) => {
    setSelectCategory(item.selectCategory);
    setEditId(item.id);
  };

  function update(editId) {
    FetchData("PUT", "http://localhost:5000/categories/" + editId, cat)
      .then(() => {
        fetchData();
        setSelectCategory("");
      })
      .catch((err) => {
        console.log(err.msg);
      });
  }
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="card col-md-8 m-auto">
            <div className="text-end mx-3 my-2">
              <button
                className="btn btn-success my-2"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#createModal"
              >
                Add New Category
              </button>
            </div>
            <div className="card-body col-lg-8 col-12 m-auto">
              <div className="table-responsive">
                <table
                  className="table table-bordered "
                  id="dataTable"
                  cellSpacing="0"
                >
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Category</th>
                      <th scope="col" className="">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category, index) => {
                      return (
                        <tr key={category.id}>
                          <th scope="row">{index + 1}</th>
                          <td>{category.selectCategory}</td>
                          <td className="w-50">
                            <Button
                              type="button"
                              className="btn btn-primary m-2"
                              data_toogle="modal"
                              data_target="#editModal"
                              click={() => {
                                loadEdit(category);
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
                                setDelId(category.id);
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
      <Model
        Model_id="createModal"
        Model_Title="Create Car Category"
        Danger_btn_fun={() => {
          console.log("");
        }}
        Success_btnText="Create"
        Success_btn_fun={CreateCateg}
      >
        <Input
          id="category"
          label="Add New Category"
          className="form-control"
          name="selectCategory"
          value={selectCategory}
          placeholder="Enter New Category"
          change={(e) => {
            setSelectCategory(e.target.value);
          }}
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
        Model_Title="Edit Car Category"
        Danger_btn_fun={() => {
          console.log("");
        }}
        Success_btnText="Update"
        Success_btn_fun={() => update(editId)}
      >
        <Input
          id="category"
          label="Add New Category"
          className="form-control"
          name="selectCategory"
          value={selectCategory}
          change={(e) => {
            setSelectCategory(e.target.value);
          }}
        />
      </Model>
    </>
  );
};

export default Category;
