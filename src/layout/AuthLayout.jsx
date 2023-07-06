import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const AuthLayout = () => {
  // const { user, loading, error } = useAuth();
  // const location = useLocation();

  // console.log("layout ", { location, user, loading, error });

  return (
    <>
      <Header />

      {/* {loading && <Loading />}
      {user && !loading && !error && (
        <Navigate to={location?.state?.from?.pathname || "/"} />
      )}
      {!user && !loading && <Outlet />} */}
      <Outlet />
      <Footer />
    </>
  );
};

export default AuthLayout;
