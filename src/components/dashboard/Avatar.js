const Avatar = ({ image, username }) => {
  if (!username) return;
  const upperCaseTheFirstLetter = (username) =>
    username[0].toUpperCase() + username.slice(1);
  const img = <img className="avatar__image" src={image} alt="freind" />;
  let user = username.substring(0, 2).toUpperCase();
  return (
    <div className="avatar ">
      <div className="avatar__image">
        {image ? img : <p className="string__avatar">{user}</p>}
      </div>
      <p className="friend__username">{upperCaseTheFirstLetter(username)}</p>
    </div>
  );
};
export default Avatar;
