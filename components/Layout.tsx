import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col bg-indigo-900">
      <Navbar />
      <div className="flex-auto sm:mt-8 px-4">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
