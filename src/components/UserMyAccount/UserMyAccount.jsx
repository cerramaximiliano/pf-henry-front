import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";


export default function UserMyAccount () {
    const { isLoading, user, isAuthenticated } = useAuth0();
    const {user_detail} = useSelector((state) => state.users);

    return (
        <div>
                <div className="flex justify-end m-auto w-1/2">
                    <a className="text-blackFred-300 hover:text-orangeFred-300 cursor-pointer" href="/myaccount/orders">View Orders</a>
                </div>
                <div className="flex flex-col w-1/2 m-auto rounded-sm bg-graym p-[20px] flex-wrap">
                    <div>
                        <img className="max-w-[50px]" src={user.picture} alt="" />
                    </div>
                    <div>
                        <h4 className="m-0">Email: </h4>
                        <p>{user_detail.email}</p>
                    </div>
                    <div>
                        <h4 className="m-0">User Id: </h4>
                        <p>{user_detail._id}</p>
                    </div>

                </div>
        </div>
    )
}