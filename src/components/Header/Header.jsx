import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <headerß className="flex justify-between items-center p-4 mx-4 border-b-2">
      <h1 className="text-4xl font-bold">Blogs Hub</h1>
      <img src={profile} alt="" />
    </headerß>
  );
};

export default Header;
