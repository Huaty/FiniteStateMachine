// Helper function to check if the user is authenticated
import Cookies from "js-cookie";
const isAuthenticated = () => {
  const sessionToken = Cookies.get("sessionToken");
  return sessionToken !== undefined;
};

export { isAuthenticated };
