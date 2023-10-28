import { useLocation, useParams } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";
import UserMyAccount from "../../components/UserMyAccount/UserMyAccount";
import { useAuth0 } from "@auth0/auth0-react";

export default function MyAccount() {
    const { pathname } = useLocation();
    const { isLoading, user, isAuthenticated } = useAuth0();
    return (
        <div>
          <h3>My Account</h3>
          {isAuthenticated && (
            <>
              {pathname.startsWith('/myaccount/users') && <UserMyAccount />}
              {pathname.startsWith('/myaccount/orders') && <Dashboard />}
            </>
          )}
          {!isAuthenticated && <div>You must Login or SignUp</div>}
        </div>
      )
}