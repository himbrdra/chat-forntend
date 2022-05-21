import { PlusIcon, Spinner } from "../svg";
const ImgContainer = ({ handleImage, profileImage, isLoading }) => {
  const defaultImage =
    "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg";
  console.log(isLoading);
  return isLoading ? (
    <h1 className="loading__title">loading...</h1>
  ) : (
    <div className="img__container">
      <label className="upload__image">
        <img
          src={profileImage.secure_url ? profileImage.secure_url : defaultImage}
          className="user__img"
          alt="user__img"
        />
        <PlusIcon />
        <input onChange={handleImage} type="file" accept="image/*" hidden />
      </label>
    </div>
  );
};

export default ImgContainer;
