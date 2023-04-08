import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>
        <BiArrowBack />
        Back
      </button>
    </div>
  );
};

export default BackButton;
