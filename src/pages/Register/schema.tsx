import * as yup from "yup";

type FormDataRegister = {
  name: string;
  email: string;
  telephone: string;
  city: string;
  state: string;
  password: string;
  confirmPassword: string;
};

const schemaRegister = yup
  .object({
    name: yup.string().required("Nome completo é obrigatório."),
    email: yup
      .string()
      .email("E-mail inválido.")
      .required("E-mail é obrigatório."),
    telephone: yup
      .string()
      .matches(
        /^\(\d{2}\) \d{4,5}-\d{4}$/,
        "Telefone deve estar no formato (XX) XXXXX-XXXX."
      )
      .required("Telefone é obrigatório."),
    city: yup.string().required("Cidade é obrigatória."),
    state: yup.string().required("Estado é obrigatório."),
    password: yup
      .string()
      .min(6, "Senha deve ter ao menos 6 caracteres.")
      .required("Senha é obrigatória."),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas devem coincidir.")
      .required("Confirmação de senha é obrigatória."),
  })
  .required();

export { schemaRegister, type FormDataRegister };
