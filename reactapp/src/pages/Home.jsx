import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ModalDelete from "../components/ModalDelete";
import NavbarComp from "../components/Navbar";

function Home() {
  const [deleteModal, setDeleteModal] = useState(false);

  const [users, setUsers] = useState([]);

  // get data
  const loadUsers = () => {
    axios.get("http://localhost:3030/users").then((res) => {
      setUsers(res?.data.reverse() ?? []);
    });
  };

  useEffect(() => {
    loadUsers();
  },[users]);

  function DeleteUser(id) {
    axios
      .delete(`http://localhost:3030/users/${id}`)
      .then(loadUsers())
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div className="flex flex-col">
        <NavbarComp />
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light">
                <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                  <tr>
                    <th scope="col" className=" px-6 py-4">
                      No
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      #id
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Email
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => {
                    return (
                      <tr
                        key={index}
                        className="border-b dark:border-neutral-500"
                      >
                        <td className="whitespace-nowrap  px-6 py-4 font-medium bg-slate-100">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">
                          {user.id}
                        </td>
                        <td className="whitespace-nowrap  px-6 py-4">
                          {user.name}
                        </td>
                        <td className="whitespace-nowrap  px-6 py-4">
                          {user.email}
                        </td>
                        <td className="whitespace-nowrap  px-6 py-4 flex space-x-3 justify-center items-center">
                          <Link
                            to={`/view/${user.id}`}
                            className="font-semibold text-white bg-black px-4 py-2 rounded-xl"
                          >
                            View
                          </Link>
                          <Link
                            to={`/edit/${user.id}`}
                            className="font-semibold text-white bg-blue-600 px-4 py-2 rounded-xl"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => DeleteUser(user.id)}
                            className="font-semibold text-white bg-red-600 px-4 py-2 rounded-xl"
                          >
                            Delete
                          </button>
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
      {deleteModal && <ModalDelete />}
    </>
  );
}

export default Home;
