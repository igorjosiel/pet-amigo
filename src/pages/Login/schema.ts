import * as yup from "yup";

type FormDataLogin = {
  email: string;
  password: string;
};

const schemaLogin = yup
  .object({
    email: yup
      .string()
      .email("E-mail inválido.")
      .required("E-mail é obrigatório."),
    password: yup
      .string()
      .min(6, "Senha deve ter ao menos 6 caracteres.")
      .required("Senha é obrigatória."),
  })
  .required();

export { schemaLogin, type FormDataLogin };
