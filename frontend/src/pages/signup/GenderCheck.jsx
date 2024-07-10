import React from "react";

const genderCheck = () => {
  return (
    <>
      <div className="flex ">
        <div className="form-control w-full">
          <label className="label gap-2 cursor-pointer">
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Gender
              </option>
              <option className="label-text">Male</option>
              <option className="label-text">Female</option>
            </select>
          </label>
        </div>
      </div>
    </>
  );
};

export default genderCheck;
