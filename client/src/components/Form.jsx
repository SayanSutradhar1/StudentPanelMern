import { useState } from "react";
import validator from "../utils/validators";

const Form = () => {
  const [student, setStudent] = useState({
    pic: null,
    name: "",
    rollNumber: "",
    department: "",
    year: "",
    address: "",
    contact: "",
    email: "",
    resume: null,
  });

  const convertToBase64 = (file)=>{
    return new Promise((resolve,reject)=>{
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = ()=>{
        resolve(fileReader.result)
      }
      fileReader.onerror = (err)=>{
        reject(err)
      }
    })
  }

  const imageChange = async (e) => {
    const file = e.target.files[0];
    const base64File = await convertToBase64(file)
    if (base64File) {
      setStudent((prev) => ({ ...prev, pic: base64File }));
      console.log(base64File);
    } else {
      return;
    }
  };

  const cvChange = async(e) => {
    const file = e.target.files[0];
    // const base64File = await convertToBase64(file)
    if (file) {
      setStudent((prev) => ({ ...prev, resume: URL.createObjectURL(file) }));
      // console.log(base64File);
    } else {
      return;
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validator(student)) {
      return;
    }
    console.log(student);
    setStudent({
      pic:null,
      name:"",
      rollNumber:"",
      department:"",
      year:"",
      address:"",
      contact:"",
      email:"",
      resume:null
    })
    window.alert("Your data has been submitted Successfully")
    const res = await fetch("/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });  
  };

  return (
    <div className="py-6 px-10 max-[490px]:px-4 shadow-2xl rounded-md backdrop-blur-lg flex items-center flex-col bg-[rgba(0,0,0,0.2)] max-[490px]:w-[300px]">
      <form
        method="POST"
        className="w-full flex flex-col gap-8 text-black relative text-[1.125rem] max-[490px]:text-[1rem]"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="photo">Upload Your Picture</label>
          <div className="flex items-center">
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={imageChange}
            />
            <div id="image-preview">
              {student.pic && (
                <img src={student.pic} alt="pic" className="max-h-[80px]" />
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-3 max-[600px]:flex-col flex-1">
          <span className="flex flex-col gap-2 ">
            <input
              value={student.name}
              onChange={(e) => {
                setStudent((prevStudent) => ({
                  ...prevStudent,
                  name: e.target.value,
                }));
              }}
              required={true}
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="w-full py-1 relative bg-transparent border-b-2 border-orange-500 border-solid outline-none placeholder:text-black placeholder:absolute placeholder:left-0 focus:border-green-700 duration-300"
              autoComplete="off"
            />
          </span>
          <span className="flex flex-col gap-2 flex-1">
            <input
              type="text"
              name="roll-number"
              required
              value={student.rollNumber}
              onChange={(e) =>
                setStudent((prev) => ({ ...prev, rollNumber: e.target.value }))
              }
              id="roll-number"
              placeholder="Roll Number"
              className="w-full py-1 relative bg-transparent border-b-2 border-orange-500 border-solid outline-none placeholder:text-black placeholder:absolute placeholder:left-0 focus:border-green-700 duration-300"
              autoComplete="off"
            />
          </span>
        </div>
        <div className="flex gap-3 max-[600px]:flex-col">
          <span className="flex flex-col gap-2 flex-1">
            <label htmlFor="department">Department</label>
            <select
              value={student.department}
              onChange={(e) => {
                setStudent((prevStudent) => ({
                  ...prevStudent,
                  department: e.target.value,
                }));
              }}
              required
              name="department"
              id="department"
              className="w-full bg-[rgba(161,121,72,0.39)] border-orange-500 rounded-lg border-2 py-2 outline-none px-1 focus:border-green-700 duration-300"
            >
              <option value="" defaultChecked>
                Select Dept
              </option>
              <option value="CSE">CSE</option>
              <option value="CE">CE</option>
              <option value="ECE">ECE</option>
              <option value="EE">EE</option>
              <option value="ME">ME</option>
            </select>
          </span>
          <span className="flex flex-col gap-2 flex-1">
            <label htmlFor="roll-number">Year</label>
            <select
              type="text"
              name="year"
              value={student.year}
              required
              onChange={(e) =>
                setStudent((prev) => ({ ...prev, year: e.target.value }))
              }
              id="year"
              className="w-full bg-[rgba(161,121,72,0.39)] border-orange-500 rounded-lg border-2 py-2 outline-none px-1 focus:border-green-700 duration-300"
            >
              <option value="" defaultChecked>
                Select Year
              </option>
              <option value="first">1st</option>
              <option value="second">2nd</option>
              <option value="third">3rd</option>
              <option value="fourth">4th</option>
            </select>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            id="address"
            name="address"
            required
            value={student.address}
            onChange={(e) => {
              setStudent((prev) => ({ ...prev, address: e.target.value }));
            }}
            placeholder="Address"
            className="w-full py-1 relative bg-transparent border-b-2 border-orange-500 border-solid outline-none placeholder:text-black placeholder:absolute placeholder:left-0 focus:border-green-700 duration-300"
            autoComplete="off"
          />
        </div>
        <div className="flex gap-3 max-[600px]:flex-col">
          <span className="flex flex-col gap-2 flex-1">
            <input
              type="text"
              id="phonenumber"
              name="phonenumber"
              required
              value={student.contact}
              onChange={(e) =>
                setStudent((prev) => ({ ...prev, contact: e.target.value }))
              }
              placeholder="Contact Number"
              className="w-full py-1 relative bg-transparent border-b-2 border-orange-500 border-solid outline-none placeholder:text-black placeholder:absolute placeholder:left-0 focus:border-green-700 duration-300"
              autoComplete="off"
            />
          </span>
          <span className="flex flex-col gap-2 flex-1">
            <input
              type="email"
              id="email"
              name="email"
              required
              value={student.email}
              onChange={(e) =>
                setStudent((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Email Id"
              className="w-full py-1 relative bg-transparent border-b-2 border-orange-500 border-solid outline-none placeholder:text-black placeholder:absolute placeholder:left-0 focus:border-green-700 duration-300"
              autoComplete="off"
            />
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="photo">Upload Your Resume</label>
          <input
            type="file"
            id="cv"
            name="cv"
            accept=".pdf"
            onChange={cvChange}
            required
          />
        </div>
        <input
          type="submit"
          value="Submit Details"
          className="py-4 cursor-pointer flex-1 text-center bg-[rgba(131,96,51,0.7)] hover:bg-transparent border-[2px] border-[rgba(131,96,51,0.7)] duration-100 rounded"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Form;
