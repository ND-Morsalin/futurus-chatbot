import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../provider/Auth/AuthProvider";
import Loading from "../Shared/Loading/Loading";

/* eslint-disable react/prop-types */
const Private = ({ children }) => {
  const { user, loading, error } = useAuth();
  const location = useLocation();

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;
  if (!user)
    return (
      <Navigate
        to={"/auth/login"}
        state={{
          from: location,
        }}
        replace
      />
    );

  return <div>{children}</div>;
};

export default Private;
