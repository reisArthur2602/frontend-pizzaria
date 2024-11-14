import { Metadata } from "next";
import FormLogin from "./sessions/form-login";

export const metadata: Metadata = {
  title: "Login - Painel Admin",
};

const Login = () => {
  return <FormLogin />;
};

export default Login;
