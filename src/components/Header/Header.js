import "./Header.css";

const Header = ({ theme, setTheme }) => {
  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <h1>
      DFK Floor Heroes
      <button onClick={changeTheme}>
        {theme === "light" ? (
          <i className="fa-solid fa-toggle-on"></i>
        ) : (
          <i className="fa-solid fa-toggle-off"></i>
        )}
      </button>
    </h1>
  );
};

export default Header;
