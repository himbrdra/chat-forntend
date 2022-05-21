const Avatar = ({ image, username }) => {
  if (!username) return;
  const upperCaseTheFirstLetter = (username) =>
    username[0].toUpperCase() + username.slice(1);
  const img = <img className="friend__image" src={image} alt="friend" />;
  return (
    <div className="avatar ">
      <div className="avatar__image">{img}</div>
      <p className="friend__username">{upperCaseTheFirstLetter(username)}</p>
    </div>
  );
};
export default Avatar;
