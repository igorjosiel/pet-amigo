import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiMail } from "react-icons/fi";
import { IoMdLock } from "react-icons/io";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";
import Typography from "../../components/Typography";

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
      <Typography>Faça login para continuar</Typography>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pt-8 flex flex-col gap-3 w-full"
      >
        <Input
          {...register("email")}
          type="email"
          placeholder="E-mail"
          aria-label="E-mail"
        >
          <FiMail size={20} />
        </Input>
        <Typography variant="error">{errors.email?.message}</Typography>

        <Input
          {...register("password")}
          type="password"
          placeholder="Senha"
          aria-label="Senha"
        >
          <IoMdLock size={20} />
        </Input>
        <Typography variant="error">{errors.password?.message}</Typography>

        <Link path="forgot-password">Esqueceu sua senha?</Link>

        <Button>Entrar</Button>
      </form>

      <p className="text-primary pt-5">
        Não tem uma conta? <Link path="register">Cadastre-se</Link>
      </p>
    </div>
  );
}

export default Login;
