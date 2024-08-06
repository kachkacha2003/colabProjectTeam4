import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IFormType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirm_password: string;
  terms?: boolean;
}

const schema = yup
  .object({
    firstName: yup.string().required("First name is a required field"),
    lastName: yup.string().required("Last name is a required field"),
    password: yup.string().required("Password is a required field"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Please confirm your password"),
    terms: yup.boolean().oneOf([true], "You must accept the terms and conditions"),
    email: yup
      .string()
      .email("Email is not valid")
      .required("Email is a required field"),
  })
  .required();

export function Registration() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IFormType>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormType> = (data) => {
    console.log(data);
  };

  const firstName = watch("firstName");

  useEffect(() => {
    if (firstName && firstName.length > 4) {
      setValue("firstName", "nika");
    }
  }, [firstName, setValue]);

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="flex flex-col">
        <div className="flex w-[420px] h-[52px] items-center justify-center border-[2px] rounded-[6px] border-[#D2D2D2] text-[16px] text-[#2E2E2E] gap-[12px] cursor-pointer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="googleIcon" />
          <span>Continue With Google</span>
        </div>
        <span className="flex items-center py-[auto]"></span>
        <form className="flex flex-col gap-[10px]" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border-[2px] border-[#D2D2D2] rounded-[6px] pl-[20px] w-[420px] h-[52px] placeholder-black"
            type="text"
            {...register("firstName")}
            placeholder="Name"
            id="first_name"
          />
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName.message}</p>
          )}
          <input
            className="border-[2px] border-[#D2D2D2] rounded-[6px] pl-[20px] w-[420px] h-[52px] placeholder-black"
            type="text"
            {...register("lastName")}
            placeholder="Last Name"
            id="last_name"
          />
          {errors.lastName && (
            <p className="text-red-500">{errors.lastName.message}</p>
          )}
          <input
            type="text"
            {...register("email")}
            placeholder="Email"
            id="email"
            className="border-[2px] border-[#D2D2D2] rounded-[6px] pl-[20px] w-[420px] h-[52px] placeholder-black"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            id="password"
            className="border-[2px] border-[#D2D2D2] rounded-[6px] pl-[20px] w-[420px] h-[52px] placeholder-black"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <input
            type="password"
            {...register("confirm_password")}
            placeholder="Confirm Your Password"
            id="confirm_password"
            className="border-[2px] border-[#D2D2D2] rounded-[6px] pl-[20px] w-[420px] h-[52px] placeholder-black"
          />
          {errors.confirm_password && (
            <p className="text-red-500">{errors.confirm_password.message}</p>
          )}
          <div className="flex items-center gap-[6px]">
            <input
              className="w-[14px] h-[14px] border-[1px] border-[#D2D2D2]"
              type="checkbox"
              {...register("terms")}
            />
            <span className="text-[#000] text-[16px]">Remember Me</span>
          </div>
          <button
            className="mt-[15px] w-[420px] h-[52px] bg-[#000] text-[white] rounded-[30px]"
            type="submit"
          >
            Register
          </button>
        </form>
        <span>
          Already have an account?{" "}
          <a
            className="text-yellow-500 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Log in
          </a>
        </span>
      </div>
    </div>
  );
}
