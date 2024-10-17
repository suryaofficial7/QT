import React, { lazy, Suspense, useState } from "react";
import EmployeeTable from "./UserPages/Employee/EmployeeTable";
import { MdOutlineClose } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
const AddEmployeeForm = lazy(() =>
  import("./UserPages/Employee/AddEmployeeForm")
);
const AiRouteDetails = lazy(() =>
  import("../Components/AiComponents/AiRouteDetails")
);

const Employee = () => {
  const [show, setshow] = useState(false);
  const addEmp = (e) => {
    setshow(true);
  };

  return (
    <div className="fade">
      <div className="flex justify-end mr-2 w-[95%]">
        <div className="w-[20vw] bg-transparent m-2  border  rounded-lg border-gray-600  inline-flex content-center align-middle ">
          <input
            type="text"
            className="bg-transparent w-full p-1.5 outline-none"
            placeholder="Search employee here"
          />
        </div>
        <button
          onClick={addEmp}
          className="text-sm md:text-md p-2  hover:font-semibold text-green-600 align-middle mt-2 rounded-md inline-flex content-center"
        >
          <IoMdAdd size={20} /> Employee
        </button>
      </div>

      <div className="block md:flex w-[90%] m-auto ]">
        <div className="w-[90vw] md:w-[90vw] " >
          <EmployeeTable />
        </div>

        {show == true && (
          <div
            className="w-[100vw] top-0 overlay left-0 h-full md:w-[100vw] absolute z-20 m-auto"
            onClick={() => {
              setshow(False);
            }}
          >
            <Suspense fallback={<p>Loading...</p>}>
              <MdOutlineClose
                className="text-black absolute md:top-[12%] top-10 left-72 md:left-[60%] cursor-pointer hover:text-red-500 transition-all ease-out "
                onClick={() => {
                  setshow(false);
                }}
                size={25}
              />
              <AddEmployeeForm />
            </Suspense>
          </div>
        )}
      </div>
    </div>
  );
};

export default Employee;
