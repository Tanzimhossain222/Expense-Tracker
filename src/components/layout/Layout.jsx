import PropsType from "prop-types";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="App">
        <div className="header">
          <h1>Expense Tracker</h1>
        </div>
        <div className="main">{children}</div>

        <div className="footer">&copy;2024 by codeBit Labs</div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropsType.node,
};

export default Layout;
