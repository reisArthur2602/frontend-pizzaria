import { Metadata } from "next";
import FormRegister from "./sessions/form-register";

export const metadata: Metadata = {
  title: "Cadastro - Painel Admin",
};

const Register = () => {
  return <FormRegister />;
};

export default Register;
