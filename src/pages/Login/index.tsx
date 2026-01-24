import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiMail } from "react-icons/fi";
import { IoMdLock } from "react-icons/io";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";

import { schemaLogin, type FormDataLogin } from "./schema";
import logo from "../../assets/logo.png";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataLogin>({
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit = (data: FormDataLogin) => console.log(data);

  return (
    <div className="flex flex-col items-center md:bg-background md:rounded-2xl px-8">
      <img src={logo} className="w-md" alt="Logo da aplicação" />
      <h1 className="text-2xl">Bem-vindo de volta!</h1>
      <p className="text-primary text-base pt-2.5">Faça login para continuar</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pt-8 flex flex-col gap-3 w-full"
      >
        <Input {...register("email")} type="email" placeholder="E-mail">
          <FiMail size={20} />
        </Input>
        <p className="text-danger text-[14px]">{errors.email?.message}</p>

        <Input {...register("password")} type="password" placeholder="Senha">
          <IoMdLock size={20} />
        </Input>
        <p className="text-danger text-[14px]">{errors.password?.message}</p>

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
