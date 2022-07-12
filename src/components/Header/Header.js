import "./Header.css";

const Header = ({ theme, setTheme }) => {
  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <h1>
      DFK Floor Heroes<button onClick={changeTheme}>L/D</button>
    </h1>
  );
};

export default Header;
