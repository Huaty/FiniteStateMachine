// login.js
import LoginForm from "@components/Forms/loginForm";
import FirebaseLoginForm from "@/components/Forms/firesBaseLoginForm";

const LoginPage = () => {
  return (
    <div>
      {/* <LoginForm /> */}
      <FirebaseLoginForm />
    </div>
  );
};

export default LoginPage;
