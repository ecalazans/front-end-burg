import { type ReactNode } from "react";
import { Navigate } from "react-router";

const PublicRoute = ({ children }: { children: ReactNode }) => {
  // const [isChecking, setIsChecking] = useState(true);
  // const navigate = useNavigate();

  const cookie = document.cookie;

  if (cookie) {
    const cookies = cookie.split("; ");
    const userCookie = cookies.find((c) => c.startsWith("user="));

    if (userCookie) {
      return <Navigate to={"/"} replace />;
    }
  }

  // if (isChecking) {
  //   return <p>Carregando...</p>;
  // }

  return <div>{children}</div>;
};

export default PublicRoute;
