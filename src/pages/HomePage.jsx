import { useNavigate } from "react-router-dom";
import HomeLayout from "@layouts/Homelayout";

function HomePage() {
  const navigate = useNavigate();

  const handleProjectSelect = (projectId) => {
    navigate(`/dashboard/${projectId}`);
  };

  return <HomeLayout onProjectSelect={handleProjectSelect} />;
}

export default HomePage;
