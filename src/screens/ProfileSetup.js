import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userRoute from "../api/user";
import LoginContainer from "../components/login/LoginContainer";
import LoginPageBackground from "../components/login/LoginPageBackground";
import ImgContainer from "../components/profileSetup/ImgContainer";
import "../styles/profileSetup.css";
const ProfileSetup = () => {
  const [profileImage, setProfileImage] = useState("");
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    console.log("user", user);
    setUser(user);
    if (!user) navigate("/login");
    // TODO  chek if the token valid
  }, [navigate]);

  const handleImage = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    // TODO:CLEAN THE API FOLDER
    const user = JSON.parse(window.localStorage.getItem("user"));
    userRoute.defaults.headers.common["Authorization"] = user?.token;
    setIsLoading(true);
    const { data } = await userRoute.post("/profile-image", formData);
    setIsLoading(false);
    setProfileImage(data);
  };
  const navigateToHome = () => navigate("/");
  return (
    user && (
      <div>
        <LoginPageBackground />
        <LoginContainer>
          <h3 className="upload__image--title">
            Please upload your image profile
          </h3>
          <ImgContainer
            handleImage={handleImage}
            profileImage={profileImage}
            isLoading={isLoading}
          />
          <div className="action__btn">
            <button onClick={navigateToHome} className="action__btn-skip btn">
              Skip
            </button>
            <button
              disabled={!profileImage}
              onClick={navigateToHome}
              className="action__btn-next btn"
            >
              Next
            </button>
          </div>
        </LoginContainer>
      </div>
    )
  );
};

export default ProfileSetup;
