import { FiMail } from "react-icons/fi";
import { IoMdLock } from "react-icons/io";

import Button from "../components/Button";
import Input from "../components/Input";
import Link from "../components/Link";

import logo from "../assets/logo.png";

function Login() {
  return (
    <div className="flex flex-col items-center md:bg-background md:rounded-2xl px-8">
      <img src={logo} className="w-md" alt="Logo da aplicação" />
      <h1 className="text-2xl">Bem-vindo de volta!</h1>
      <p className="text-primary text-base pt-2.5">Faça login para continuar</p>

      <form className="pt-8 flex flex-col gap-4 w-full">
        <Input type="email" placeholder="E-mail">
          <FiMail size={20} />
        </Input>
        <Input type="password" placeholder="Senha">
          <IoMdLock size={20} />
        </Input>

        <Link>Esqueceu sua senha?</Link>

        <Button>Entrar</Button>
      </form>

      <p className="text-primary pt-5">
        Não tem uma conta? <Link>Cadastre-se</Link>
      </p>
    </div>
  );
}

export default Login;
