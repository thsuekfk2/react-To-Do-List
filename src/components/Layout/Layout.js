import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout-wrap">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
