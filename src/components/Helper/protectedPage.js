// Protected page or component
import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const ProtectedPage = () => {
  const router = useRouter();

  useEffect(() => {
    const sessionToken = Cookies.get("sessionToken");

    // Check if the user is authenticated
    if (!sessionToken) {
      // Redirect to the login page if not authenticated
      router.push("/LoginIn");
    }
  }, []);

  // Render the protected content
  return <div>Protected content</div>;
};

export default ProtectedPage;
