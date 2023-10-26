import { useDispatch, useSelector } from "react-redux";
import { Paginated } from "../../Paginated/Paginated";
import { useEffect } from "react";
import { getAllUsers } from "../../../redux/users/usersActions";


export default function UsersDashboard() {
    const { users } = useSelector(
        (state) => state.users
      );
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])




    return (
        <>
            <div className="sticky z-10 mt-[20px] bg-[#121212] ">
            <table>
                <thead>
                    <tr>
                    <th  className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Given Name</th>
                    <th  className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Family Name</th>
                    <th  className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Email</th>
                    <th  className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Address</th>
                    <th  className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Role</th>
                    <th  className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Status</th>
                    <th  className="bg-graym text-whiteFred-100 py-[20px] px-[80px]">Actions</th>
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
                              <td className="bg-graym text-whiteFred-100">{user.given_name}</td>
                              <td className="bg-graym text-whiteFred-100">{user.family_name}</td>
                              <td className="bg-graym text-whiteFred-100">{user.email}</td>
                              <td className="bg-graym text-whiteFred-100">{user.address}</td>
                              <td className="bg-graym text-whiteFred-100">{user.role}</td>
                              <td className="bg-graym text-whiteFred-100">{user.isActive ? 'Active' : 'Not Active'}</td>
                              <td className="bg-graym text-whiteFred-100">
                                <div>
                                  <button
                                    onClick={() => console.log('edit')}
                                  >
                                     Edit
                                  </button>
                                  <button
                                    onClick={() => console.log('delete')}
                                  >
                                    Delete
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                    }
                </tbody>
                </table>
                <Paginated/>
            </div>
        </>
    )
}