import { FiUser } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { GoLock } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { PiCityThin } from "react-icons/pi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Typography from "../../components/Typography";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { schemaRegister, type FormDataRegister } from "./schema";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataRegister>({
    resolver: yupResolver(schemaRegister),
  });

  const onSubmit = (data: FormDataRegister) => console.log(data);

  return (
    <div className="flex flex-col items-center md:bg-background md:rounded-2xl px-8 py-12">
      <h1>Crie sua conta!</h1>
      
      <Typography className="text-center pt-3">
        Cadastre-se para encontrar ou adotar um pet
      </Typography>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pt-8 flex flex-col gap-3 w-full"
      >
        <div>
          <Input
            type="text"
            placeholder="Nome completo"
            aria-label="Nome completo"
            {...register("name")}
          >
            <FiUser size={18} />
          </Input>
          <Typography variant="error">{errors.name?.message}</Typography>
        </div>

        <div>
          <Input
            type="email"
            placeholder="E-mail"
            aria-label="E-mail"
            {...register("email")}
          >
            <FiMail size={18} />
          </Input>
          <Typography variant="error">{errors.email?.message}</Typography>
        </div>

        <div>
          <Input
            type="tel"
            placeholder="Telefone"
            aria-label="Telefone"
            {...register("telephone")}
          >
            <FiPhone size={18} />
          </Input>
          <Typography variant="error">{errors.telephone?.message}</Typography>
        </div>

        <div>
          <Input
            type="text"
            placeholder="Cidade"
            aria-label="Cidade"
            {...register("city")}
          >
            <PiCityThin size={18} />
          </Input>
          <Typography variant="error">{errors.city?.message}</Typography>
        </div>

        <div>
          <Input
            type="text"
            placeholder="Estado"
            aria-label="Estado"
            {...register("state")}
          >
            <PiCityThin size={18} />
          </Input>
          <Typography variant="error">{errors.state?.message}</Typography>
        </div>

        <div>
          <Input
            type="password"
            placeholder="Senha"
            aria-label="Senha"
            {...register("password")}
          >
            <GoLock size={18} />
          </Input>
          <Typography variant="error">{errors.password?.message}</Typography>
        </div>

        <div>
          <Input
            type="password"
            placeholder="Confirme sua senha"
            aria-label="Confirme sua senha"
            {...register("confirmPassword")}
          >
            <GoLock size={18} />
          </Input>
          <Typography variant="error">
            {errors.confirmPassword?.message}
          </Typography>
        </div>

        <Button >Cadastrar</Button>
      </form>
    </div>
  );
}

export default Register;
