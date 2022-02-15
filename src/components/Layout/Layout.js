import Footer from "./Footer";
import Header from "./Header";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
