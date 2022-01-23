import React, {useState, useEffect} from "react";
import ClientProfile from "./Client";
import ProfessionalProfile from "./Professional";

const Profile = () => {
  const [rol, setRol] = useState('')
  
  useEffect(() => {
    setRol(localStorage.getItem('rol'))
  }, [])

  const profile = {
    2: <ClientProfile />,
    3: <ProfessionalProfile />,
  };

  return <div>{profile[rol]}</div>;
};

export default Profile;
