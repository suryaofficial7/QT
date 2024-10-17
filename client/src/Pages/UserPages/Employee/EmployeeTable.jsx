import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const EmployeeTable = () => {
  const employees = [
    {
      avatar: 'https://via.placeholder.com/50',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      job: 'Software Engineer',
      department: 'Development',
      salary: '$100,000',
      dateOfJoining: '2022-01-15',
    },
    {
      avatar: 'https://via.placeholder.com/50',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      job: 'Software Engineer',
      department: 'Development',
      salary: '$100,000',
      dateOfJoining: '2022-01-15',
    },  {
      avatar: 'https://via.placeholder.com/50',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      job: 'Software Engineer',
      department: 'Development',
      salary: '$100,000',
      dateOfJoining: '2022-01-15',
    },  {
      avatar: 'https://via.placeholder.com/50',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      job: 'Software Engineer',
      department: 'Development',
      salary: '$100,000',
      dateOfJoining: '2022-01-15',
    },  {
      avatar: 'https://via.placeholder.com/50',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      job: 'Software Engineer',
      department: 'Development',
      salary: '$100,000',
      dateOfJoining: '2022-01-15',
    },  {
      avatar: 'https://via.placeholder.com/50',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      job: 'Software Engineer',
      department: 'Development',
      salary: '$100,000',
      dateOfJoining: '2022-01-15',
    },  {
      avatar: 'https://via.placeholder.com/50',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      job: 'Software Engineer',
      department: 'Development',
      salary: '$100,000',
      dateOfJoining: '2022-01-15',
    },  {
      avatar: 'https://via.placeholder.com/50',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      job: 'Software Engineer',
      department: 'Development',
      salary: '$100,000',
      dateOfJoining: '2022-01-15',
    },  {
      avatar: 'https://via.placeholder.com/50',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      job: 'Software Engineer',
      department: 'Development',
      salary: '$100,000',
      dateOfJoining: '2022-01-15',
    },  {
      avatar: 'https://via.placeholder.com/50',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      job: 'Software Engineer',
      department: 'Development',
      salary: '$100,000',
      dateOfJoining: '2022-01-15',
    }, 
  ];

  return (
    <div className="container mx-auto mb-6 h-200 text-sm ">
      
      <div className=" overflow-scroll h-[500px] ">
        
        <table className="min-w-full  border border-gray-200 rounded-lg  mb-4">
          <thead className="bg-gray-100 ">
            <tr className='sticky -top-0.5 bg-gray-300 pt-2'>
              <th className="px-6 py-3  text-sm font-medium text-gray-500 uppercase">Avatar</th>
              <th className="px-6 py-3  text-sm font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3  text-sm font-medium text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3  text-sm font-medium text-gray-500 uppercase">Phone</th>
              <th className="px-6 py-3  text-sm font-medium text-gray-500 uppercase">Job</th>
              <th className="px-6 py-3  text-sm font-medium text-gray-500 uppercase">Department</th>
              <th className="px-6 py-3  text-sm font-medium text-gray-500 uppercase">Salary</th>
              <th className="px-6 py-3  text-sm font-medium text-gray-500 uppercase ">Date of Joining</th>
              <th className="px-6 py-3  text-sm font-medium text-gray-500 uppercase ">Actions</th>
            </tr>
          </thead>
          <tbody className=''>
            {employees.map((employee, index) => (
              <tr key={index} className="border-t ">
                <td className="px-6 py-2  sticky left-0 md:static whitespace-nowrap">
                  <img
                    src={employee.avatar}
                    alt="avatar"
                    className="h-10 w-10 rounded-full"
                  />
                </td>
                <td className="px-2  whitespace-nowrap">{employee.name}</td>
                <td className="px-2  whitespace-nowrap">{employee.email}</td>
                <td className="px-2  whitespace-nowrap">{employee.phone}</td>
                <td className="px-2  whitespace-nowrap">{employee.job}</td>
                <td className="px-2  whitespace-nowrap">{employee.department}</td>
                <td className="px-2  whitespace-nowrap">{employee.salary}</td>
                <td className="px-2  whitespace-nowrap">{employee.dateOfJoining}</td>
                <td className="px-2  whitespace-nowrap">
                  <Link to={`/emp/update/${index}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit</Link>
                  <Link to={`/emp/delete/${index}`} className="bg-red-500 text-white px-4 py-2 rounded ml-2 hover:bg-red-600">Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br /><br /><br />
    </div>
  );
};

export default EmployeeTable;
