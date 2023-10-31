import { useDispatch, useSelector } from "react-redux";
import { Paginated } from "../../Paginated/Paginated";
import { useContext, useEffect, useState } from "react";
import { activateUser, deleteUser, getAllUsers } from "../../../redux/users/usersActions";
import Swal from 'sweetalert2';
import Loader from "../../Loader/Loader";
import { FiltersContext } from "../../../context/filter";


export default function UsersDashboard() {
  const { users, currentPage, totalPages } = useSelector((state) => state.users);
  const [isLoading, setIsLoading] = useState(false)
  const { filters, setFilters } = useContext(FiltersContext);
  const dispatch = useDispatch()

  useEffect(() => {
    setIsLoading(true)
    dispatch(getAllUsers({ ...filters })).then(() => { setIsLoading(false) })
    console.log(users);
  }, [filters])

  const banUser = (userId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This user won't be able to log in!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      iconColor: '#d33',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(userId))
        .then(() => {
          setIsLoading(true)
          dispatch(getAllUsers({ ...filters })).then(() => { setIsLoading(false) })
        })
          .catch((error) => {
            console.error("Error al eliminar el usuario: ", error);
          });
      }
    });
  };

  const unbanUser = (userId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This user will allow the user to log in!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, activate it!',
      iconColor: '#d33',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(activateUser(userId))
          .then(() => {
            setIsLoading(true)
            dispatch(getAllUsers('')).then(() => { setIsLoading(false) })
          })
          .catch((error) => {
            console.error("Error al activar usuario: ", error);
          });
      }
    });
  };


  const sortColumn = (target) => {
    if(filters.orderBy === target) setFilters({...filters, orderBy: '-' + target})   
    else setFilters({...filters, orderBy: target})
  }




  return (
    <>
      {isLoading ? <Loader /> : <div className="sticky mt-[20px] bg-whiteFred-100 ">
        <table>
          <thead>
            <tr>
              <th className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Given Name</th>
              <th className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Family Name</th>
              <th className="bg-graym text-whiteFred-100 py-[20px] px-[80px]" onClick={()=> sortColumn('email')}> Email {filters.orderBy === 'email' ? '↑' : (filters.orderBy === '-email' ? '↓' : '')}</th>
              <th className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Address</th>
              <th className="bg-graym text-whiteFred-100 py-[20px] px-[80px]" onClick={()=> sortColumn('role')}> Role {filters.orderBy === 'role' ? '↑' : (filters.orderBy === '-role' ? '↓' : '')}</th>
              <th className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Status</th>
              <th className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => (
                <tr key={user._id}>
                  {/* <td className="bg-graym text-whiteFred-100">
                                  <img
                                    src={product.image}
                                    alt={product.title}
                                  />
                                </td> */}
                  <td className="bg-graym text-blackFred-100">{user.given_name}</td>
                  <td className="bg-graym text-blackFred-100">{user.family_name}</td>
                  <td className="bg-graym text-blackFred-100">{user.email}</td>
                  <td className="bg-graym text-blackFred-100">{user.address}</td>
                  <td className="bg-graym text-blackFred-100">{user.role}</td>
                  <td className="bg-graym text-blackFred-100">{user.isActive ? 'Active' : 'Not Active'}</td>
                  <td className="bg-graym text-blackFred-100">
                    <div>
                      <button
                        onClick={() => banUser(user._id)}
                      >
                        Ban User
                      </button>
                      <button
                        onClick={() => unbanUser(user._id)}
                      >
                        Unban User
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <Paginated currentPage={currentPage} totalPages={totalPages} />
      </div>}
    </>
  )
}