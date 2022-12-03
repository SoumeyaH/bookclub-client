import UserEntryForm from "../../components/UserEntryForm";

const LoginPage = () => {
  return (
    <div>
      <h2>LoginPage</h2>
      <UserEntryForm pathname={"/login"} />
      <p>dont have an account sign up here</p>
    </div>
  );
};

export default LoginPage;
