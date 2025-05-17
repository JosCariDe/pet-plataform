import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext";

const CurrentUserInfo = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="p-4 text-center">
      <p className="text-lg">
        Usuario actual: <strong>{currentUser.nombre}</strong>
      </p>
    </div>
  );
};

export default CurrentUserInfo;
