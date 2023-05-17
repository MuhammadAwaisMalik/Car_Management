import React, { useEffect } from "react";
import Input from "../Input.js";

const Form = ({
  CarName,
  CarNameErr,
  CarNameHandle,
  CarModalName,
  CarModalErr,
  CarModalHandle,
  CarColor,
  CarColorErr,
  CarColorHandle,
  CompanyName,
  CompanyNameErr,
  CompanyNameHandle,
}) => {
  return (
    <div>
      <form>
        <Input
          type="text"
          className="form-control"
          id="CarName"
          label="Car Name"
          value={CarName}
          placeholder="Enter Car Name"
          change={CarNameHandle}
          Err={CarNameErr}
        />
        <Input
          type="text"
          className="form-control"
          id="ModalName"
          value={CarModalName}
          label="Modal Name"
          placeholder="Enter Modal Name"
          change={CarModalHandle}
          Err={CarModalErr}
        />
        <Input
          type="text"
          className="form-control"
          id="ComapnyName"
          value={CompanyName}
          label="Comapny Name"
          placeholder="Enter Comapny Name"
          change={CompanyNameHandle}
          Err={CompanyNameErr}
        />
        <Input
          type="text"
          className="form-control"
          id="Color"
          value={CarColor}
          label="Color"
          placeholder="Color"
          change={CarColorHandle}
          Err={CarColorErr}
        />
      </form>
    </div>
  );
};

export default Form;
