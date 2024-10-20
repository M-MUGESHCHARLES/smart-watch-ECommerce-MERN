import { AdminProvider } from "./components/pages/AdminPage/AdminContext";
import { ShopProvider } from "./components/pages/Shop/ShopContext";

const AppContextProvider = ({ children }) => {
  return (
    <AdminProvider>
      <ShopProvider>
        {children}
      </ShopProvider>
    </AdminProvider>
  );
};

export default AppContextProvider;
