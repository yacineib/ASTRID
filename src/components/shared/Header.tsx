import iconUser from "../../assets/iconUser.png";

const Header = () => {
  return (
    <div className="flex">
      <header className="w-[80%] ml-auto bg-gray-100 p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <div className="flex flex-grow justify-center items-center space-x-4 text-sm">
          <h1 className="text-s">ASTRID:1.1.1</h1>
          <a href="/" className="text-s text-red-500 font-bold">
            [PréProduction]
          </a>
          <p className="text-s">du 11/06/2024</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center">
            <a className="font-medium" href="/user">
              <img src={iconUser} className="w-7 h-7" alt="logo user" />
            </a>
          </div>
          <div className="text-left">
            <a className="font-medium" href="/user">
              <p className="font-medium">Capit010,Capit010</p>
            </a>
            <p className="text-sm text-gray-600">
              [Capgemini Technology Services]
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
