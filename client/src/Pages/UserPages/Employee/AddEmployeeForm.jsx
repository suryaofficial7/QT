import React, { useState } from 'react';

const AddEmployeeForm = () => {
  const [employee, setEmployee] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    jobTitle: '',
    department: '',
    salary: '',
    hireDate: ''
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee Added: ', employee);
    // Handle form submission logic here
    setEmployee({
      fullName: '',
      email: '',
      phoneNumber: '',
      jobTitle: '',
      department: '',
      salary: '',
      hireDate: ''
      })
  };

  return (
    
    <form onSubmit={handleSubmit} className=" px-8 bg-gray-200 text-black py-4 h-auto content-center inline-block mt-[4vh] md:mt-[10vh] w-[90%] m-auto rounded-2xl max-w-md mx-auto border-2  ">
     <p className='mb-2 text-lg'> Add Employee</p>
      <div className="mb-4">
        <input
          type="text"
          name="fullName"
          placeholder='Full Name'
          value={employee.fullName}
          onChange={handleChange}
          className="bg-transparent theme-border-green border focus:outline-2 outline-none  rounded-lg p-2  w-[100%]"
          
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder='Email'
          value={employee.email}
          onChange={handleChange}
          className="bg-transparent theme-border-green border focus:outline-2 outline-none  rounded-lg p-2  w-[100%]"
          
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="phoneNumber"
          placeholder='Contact No'
          value={employee.phoneNumber}
          onChange={handleChange}
          className="bg-transparent theme-border-green border focus:outline-2 outline-none  rounded-lg p-2  w-[100%]"
          
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="jobTitle"
          placeholder='Job Title'
          value={employee.jobTitle}
          onChange={handleChange}
          className="bg-transparent theme-border-green border focus:outline-2 outline-none  rounded-lg p-2  w-[100%]"
          
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="department"
          placeholder='Department'
          value={employee.department}
          onChange={handleChange}
          className="bg-transparent theme-border-green border focus:outline-2 outline-none  rounded-lg p-2  w-[100%]"
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          name="salary"
          placeholder='Salary'
          value={employee.salary}
          onChange={handleChange}
          className="bg-transparent theme-border-green border focus:outline-2 outline-none  rounded-lg p-2  w-[100%]"
          min="0"
          
        />
      </div>
      <div className="mb-4">
        <input
          type="date"
          name="hireDate"
          value={employee.hireDate}
          onChange={handleChange}
          className="bg-transparent theme-border-green border focus:outline-2 outline-none  rounded-lg p-2  w-[100%]"
          
        />
      </div>
      <div className="mb-4">
        <input
          type="file"
          accept='img'
          name="avatar"
          value={employee.avatar}
          onChange={handleChange}
          className="bg-transparent theme-border-green border focus:outline-2 outline-none  rounded-lg p-2  w-[100%]"
          
        />
      </div>
    
      <button type="submit"   className="w-[100%] mt-2 theme-bg-green p-2 px-4 rounded-md">
        Add Employee
      </button>
    </form>
  );
};

export default AddEmployeeForm;
