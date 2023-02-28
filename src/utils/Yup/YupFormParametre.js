import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const validationForSchema = Yup.object()
  .notRequired()
  .shape(
    {
      formul: Yup.mixed().when(["taux", "amount"], {
        is: (taux, amount) => !taux && !amount,
        then: Yup.string().required("Formul is a required."),
      }),
      taux: Yup.mixed().when(["amount", "formul"], {
        is: (amount, formul) => !amount && !formul,
        then: Yup.number()
          .typeError("Taux is a decimale")
          .required("Taux is a required.."),
      }),
      amount: Yup.mixed().when(["taux", "formul"], {
        is: (taux, formul) => !taux && !formul,
        then: Yup.number()
          .typeError("Amount is a decimale")
          .required("Amountis a required."),
      }),
    },
    [
      ["taux", "amount"],
      ["amount", "formul"],
      ["taux", "formul"],
    ]
  );
const validationSchema = Yup.object().shape({
  bonus: Yup.array().of(
    Yup.object().shape({
      label: Yup.string().required("Label is required"),
      amount: Yup.number()
        .typeError("amount is a number")
        .required("amount is required"),
    })
  ),
  retenue: Yup.array().of(
    Yup.object().shape(
      {
        retenuFor: Yup.string().min(3, "categaure is required"),
        label: Yup.string().required("Label is required"),
        salarial: Yup.mixed().when("employer", {
          is: (employer) => !employer,
          then: validationForSchema,
        }),
        employer: Yup.mixed().when("salarial", {
          is: (salarial) => !salarial,
          then: validationForSchema,
        }),
        categaure: Yup.number().min(1, "categaure is required"),
      },
      ["employer", "salarial"]
    )
  ),
});
export default yupResolver(validationSchema);
