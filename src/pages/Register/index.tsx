import { FiUser } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { GoLock } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { PiCityThin } from "react-icons/pi";

import Typography from "../../components/Typography";
import Input from "../../components/Input";
import Button from "../../components/Button";

function Register() {
  return (
    <div className="flex flex-col items-center md:bg-background md:rounded-2xl px-8">
      <h1 className="text-2xl">Crie sua conta!</h1>

      <Typography>Cadastre-se para encontrar ou adotar um pet</Typography>

      <form className="pt-8 flex flex-col gap-3 w-full">
        <Input
          type="text"
          placeholder="Nome completo"
          aria-label="Nome completo"
        >
          <FiUser size={18} />
        </Input>

        <Input type="email" placeholder="E-mail" aria-label="E-mail">
          <FiMail size={18} />
        </Input>

        <Input type="tel" placeholder="Telefone" aria-label="Telefone">
          <FiPhone size={18} />
        </Input>

        <Input type="text" placeholder="Cidade" aria-label="Cidade">
          <PiCityThin size={18} />
        </Input>

        <Input type="text" placeholder="Estado" aria-label="Estado">
          <PiCityThin size={18} />
        </Input>

        <Input type="password" placeholder="Senha" aria-label="Senha">
          <GoLock size={18} />
        </Input>

        <Input
          type="password"
          placeholder="Confirme sua senha"
          aria-label="Confirme sua senha"
        >
          <GoLock size={18} />
        </Input>

        <Button>Cadastrar</Button>
      </form>
    </div>
  );
}

export default Register;
