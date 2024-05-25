import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentDetails = () => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    axios
      .get("/api/data")
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = async (_id) => {
    try {
      setData(() => data.filter((val) => val._id != _id));
      await axios.delete(`/api/data/${_id}`);
      alert("Item Deleted Successfully");
    } catch (err) {
      console.error("Failed");
    }
  };

  return (
    <div className="mx-24 max-[600px]:mx-4  px-4 py-16 rounded shadow-lg flex flex-1 backdrop-blur-md my-10 bg-[rgba(0,0,0,0.2)] flex-col">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold my-4 text-purple-600">Student Details</h1>
        {
          data.length ? data.length===1? <span>{data.length} item found</span> : <span>{data.length} items found</span> : <span>No data found</span>
        }
        <Link to={"/"} className="bg-red-900 text-slate-100 rounded py-1 px-2">
          Back To Home
        </Link>
      </div>
      <div className="flex flex-col box gap-4">
        {(
          data.map((item, index) => (
            <StudentList
              key={index}
              name={item.name}
              pic={item.pic}
              dept={item.department}
              roll={item.rollNumber}
              year={item.year}
              address={item.address}
              contact={item.contact}
              email={item.email}
              handleDelete={() => handleDelete(item._id)}
              cv={item.resume}
            />
          ))
        )}
      </div>
    </div>
  );
};

const StudentList = ({
  name,
  pic,
  dept,
  roll,
  year,
  address,
  contact,
  email,
  handleDelete,
  cv,
}) => (
  <div className="py-4 px-2 gap-2 flex-1 flex max-[1300px]:flex-col text-[0.9rem] bg-[rgba(0,0,0,0.7)] text-slate-300 rounded shadow-lg">
    <div className="p-1 max-w-full h-full">
      <h1 className="text-red-400">Photo</h1>
      <a href={pic} target="_blank" className="text-green-600 font-medium">
        Preview
      </a>
    </div>
    <span className="p-1 flex-1 h-full ">
      <h1 className="text-red-400">Name</h1>
      <h1 className="text-[1.12rem] font-medium text-wrap">{name}</h1>
    </span>

    <div className="p-1 max-w-full  h-full">
      <h1 className="text-red-400">Dept</h1>
      <span>{dept}</span>
    </div>
    <div className="p-1 max-w-full  flex-1 h-full">
      <h1 className="text-red-400">Roll No.</h1>
      <span>{roll}</span>
    </div>
    <div className="p-1 max-w-full  flex-1 h-full">
      <h1 className="text-red-400">Year</h1>
      <span>{year}</span>
    </div>
    <div className="p-1 max-w-full  flex-1 h-full">
      <h1 className="text-red-400">Address</h1>
      <span>{address}</span>
    </div>
    <span className="p-1 max-w-full  flex-1 h-full">
      <h1 className="text-red-400">Contact No.</h1>
      <span>{contact}</span>
    </span>
    <div className="p-1 max-[1300px]:w-full overflow-x-auto  min-[1300px]:flex-1 h-full">
      <h1 className="text-red-400">Email</h1>
      <div>{email}</div>
    </div>
    <div className="p-1 h-full max-[1300px]:w-full self-center">
      <Link
        to={cv}
        target="_blank"
        className="py-1 px-2 bg-green-800 rounded-md"
      >
        Check CV
      </Link>
    </div>
    <div className=" p-1 h-full max-[1300px]:w-full self-center">
      <button
        className="py-1 px-2 bg-red-800  rounded-md"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  </div>
);

export default StudentDetails;
