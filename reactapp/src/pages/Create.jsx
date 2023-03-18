import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const data = {
    name: name,
    email: email,
    phone: phone,
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || email === "" || phone === "") {
      return alert("Lengkapi form!");
    } else {
      axios
        .post("http://localhost:3030/users", data)
        .then(navigate("/"))
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <form
          onSubmit={handleSubmit}
          className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10 w-[350px] md:w-[500px]"
        >
          <div className="max-w-md mx-auto">
            <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
              <h2 className="leading-relaxed">Create an List</h2>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <label className="leading-loose">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Enter name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Enter email"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Phone</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Enter phone"
                  />
                </div>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <Link to="/">
                  <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none hover:bg-red-100 transition duration-50">
                    <svg
                      className="w-6 h-6 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>{" "}
                    Cancel
                  </button>
                </Link>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 transition duration-50 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                  Create
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
