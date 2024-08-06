
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
    <div className="flex items-center justify-center h-screen p-4">
      <div className="flex bg-[#FFFBFA] rounded-[42px] overflow-hidden max-w-full md:max-w-[83rem] w-full">
    
        <div className="hidden md:block w-[755px] rounded-l-[42px] bg-cover bg-center bg-[url(https://s3-alpha-sig.figma.com/img/881b/e016/1dd5b741b8cae42b2b56a5fdea8a8e76?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qBLK~iVNBoN9Sk9~1zUFknmBRkKVnr3tt4NpBfB2n1WX8BCNQLl50WNyKJ0vRIO-GkFnQ2j8j-q7cS7fJMNTB61DGAvZGqlBJKrvS5k1-Y62CVbQ2r7OVa~6qWDIFSXcVXdn6EcJOhHRX~jWHShLUHwH9MgP9kpEIrpJsfYUXMr3bIo9fspzIVUppqBkg1MvXmhE17ZgSvVegccPMBN1I2SYwvLPp11HhdZvBu5mGj3i6THOrLotbi9Cance31JPhRmGLD2uQCnJmf7h~xWEn7yU4JlOqE07VJel7nbO4CD5CmlEseIwzd6V8W2O6LDsIagffPpA177G9mZOOIA2qA__)]">
        </div>
        

        <div className="flex-1 px-4 py-8 md:px-12">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-between mb-12">
              <div className="flex items-center justify-center w-full md:w-1/2 h-20 mb-4 md:mb-0 border-2 rounded-lg border-[#D2D2D2] text-lg text-[#2E2E2E] gap-3 cursor-pointer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="GoogleIcon" />
                <span className="text-gray-600 font-semibold">Google Account</span>
              </div>
              <div className="flex items-center justify-center w-full md:w-1/2 h-20 md:ml-4 border-2 rounded-lg border-[#D2D2D2] text-lg text-[#2E2E2E] gap-3 cursor-pointer">
                <img className="w-6 h-6" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="FacebookIcon" />
                <span className="text-gray-600 font-semibold">Facebook Account</span>
              </div>
            </div>

            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              <label className="text-2xl font-semibold text-gray-600" htmlFor="first_name">First name</label>
              <input
                className="border-2 border-[#D2D2D2] rounded-lg mb-10 pl-4 w-full md:w-[537px] h-16 placeholder-gray-500"
                type="text"
                {...register("firstName")}
                placeholder="Enter your full name"
                id="first_name"
              />
              {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}

              <label className="text-2xl font-semibold text-gray-600" htmlFor="last_name">Last name</label>
              <input
                className="border-2 border-[#D2D2D2] rounded-lg mb-10 pl-4 w-full md:w-[537px] h-16 placeholder-gray-500"
                type="text"
                {...register("lastName")}
                placeholder="Enter your Last name"
                id="last_name"
              />
              {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}

              <label className="text-2xl font-semibold text-gray-600" htmlFor="email">Email</label>
              <input
                type="text"
                {...register("email")}
                placeholder="Please enter your email address"
                id="email"
                className="border-2 border-[#D2D2D2] mb-10 rounded-lg pl-4 w-full md:w-[537px] h-16 placeholder-gray-500"
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}

              <label className="text-2xl font-semibold text-gray-600" htmlFor="password">Password</label>
              <input
                type="password"
                {...register("password")}
                placeholder="Please enter your password"
                id="password"
                className="border-2 border-[#D2D2D2] mb-10 rounded-lg pl-4 w-full md:w-[537px] h-16 placeholder-gray-500"
              />
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}

              <label className="text-2xl font-semibold text-gray-600" htmlFor="confirm_password">Confirm Password</label>
              <input
                type="password"
                {...register("confirm_password")}
                placeholder="Please confirm your password"
                id="confirm_password"
                className="border-2 border-[#D2D2D2] mb-10 rounded-lg pl-4 w-full md:w-[537px] h-16 placeholder-gray-500"
              />
              {errors.confirm_password && <p className="text-red-500">{errors.confirm_password.message}</p>}

              <div className="flex items-center gap-2 mb-4">
                <input
                  className="w-5 h-5 border border-[#D2D2D2]"
                  type="checkbox"
                  {...register("terms")}
                />
                <span className="text-gray-600 text-lg">Remember Me</span>
              </div>

              <button
                className="mt-4 w-full md:w-[420px] h-16 bg-black text-white rounded-full"
                type="submit"
              >
                Register
              </button>
            </form>

            <div className="py-2 px-4 text-2xl text-gray-600 font-medium">
              Already have an account?{" "}
              <a
                className="text-yellow-500 cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
