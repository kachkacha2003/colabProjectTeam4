import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface IFormType {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
  terms?: boolean;
}

const schema = yup
  .object({
    username: yup.string().required("Username is a required field"),
    first_name: yup.string().required("First name is a required field"),
    last_name: yup.string().required("Last name is a required field"),
    password: yup.string().required("Password is a required field"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Please confirm your password"),
    terms: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions"),
    email: yup
      .string()
      .email("Email is not valid")
      .required("Email is a required field"),
  })
  .required();

export function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormType>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IFormType> = async (data: unknown) => {
    console.log(data);
    try {
      const response = await axios.post(
        "https://ann1.pythonanywhere.com/users/register/",
        data
      );
      console.log("Registration successful:", response.data);
      navigate("/home");
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
// login with googles
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };  



  //login with facebook


  // export function Registration() {
  //   const navigate = useNavigate();
  
  //   const handleFacebookLogin = async (response) => {
  //     try {
  //       const result = await axios.post(
  //         'https://yourbackend.com/auth/facebook',
  //         { accessToken: response.accessToken, userID: response.userID }
  //       );
  //       console.log('Facebook login successful:', result.data);
  //       navigate('/home');
  //     } catch (error) {
  //       console.error('Facebook login failed:', error);
  //     }
  //   };
  return (
    <div className="main-div flex bg-no-repeat bg-cover items-center justify-center min-h-screen p-4 bg-[url(https://wallpapers.com/blog/wp-content/uploads/2023/06/glitter-golden-bokeh-lights-scaled.jpeg)]">
      <div className="flex bg-[#FFFBFA] rounded-[20px] overflow-hidden max-w-full md:max-w-[70rem] w-full h-auto">
        <div className="hidden md:block w-[50%] rounded-l-[20px] bg-cover bg-center bg-[url('https://img.freepik.com/premium-photo/3d-vector-illustration-web-dev-design-with-laptop-phone-coding-tools_1251065-6821.jpg')]"></div>
        <div className="flex-1 px-6 py-8 md:px-12">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-between mb-8">
              <div className="flex items-center justify-center w-full md:w-1/2 h-14 mb-4 md:mb-0 border-2 rounded-lg border-[#D2D2D2] text-md text-[#2E2E2E] gap-3 cursor-pointer"
                onClick={handleGoogleLogin}
               >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                  alt="GoogleIcon"
                  className="w-6 h-6"
                />
                <span className="text-gray-600 font-semibold">
                  Google Account
                </span>
              </div>
              <div className="flex items-center justify-center w-full md:w-1/2 h-14 md:ml-4 border-2 rounded-lg border-[#D2D2D2] text-md text-[#2E2E2E] gap-3 cursor-pointer">
      {/* <FacebookLogin
        appId="YOUR_FACEBOOK_APP_ID"
        autoLoad={false}
        fields="name,email,picture"
        callback={handleFacebookLogin}
        render={(renderProps) => (
          <div onClick={renderProps.onClick} className="flex items-center">
            <img
              className="w-6 h-6"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
              alt="FacebookIcon"
            />
            <span className="text-gray-600 font-semibold ml-2">
              Facebook Account
            </span>
          </div>
        )}
      /> */}
      <div  className="flex items-center">
            <img
              className="w-6 h-6"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
              alt="FacebookIcon"
            />
            <span className="text-gray-600 font-semibold ml-2">
              Facebook Account
            </span>
          </div>
      </div>
        

        
      <div>
    </div>
            </div>

            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              <label
                className="text-xl font-semibold text-gray-600 mb-1"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="border-2 border-[#D2D2D2] rounded-lg mb-2 pl-4 w-full md:w-[500px] h-12 placeholder-gray-500"
                type="text"
                {...register("username")}
                placeholder="Enter your full name"
                name="username"
                id="username"
              />
              {errors.username && (
                <p className="text-red-500 text-sm font-semibold mb-2">
                  {errors.username.message}
                </p>
              )}

              <label
                className="text-xl font-semibold text-gray-600 mb-1"
                htmlFor="first_name"
              >
                First name
              </label>
              <input
                className="border-2 border-[#D2D2D2] rounded-lg mb-2 pl-4 w-full md:w-[500px] h-12 placeholder-gray-500"
                type="text"
                {...register("first_name")}
                placeholder="Enter your first name"
                name="first_name"
                id="first_name"
              />
              {errors.first_name && (
                <p className="text-red-500 text-sm font-semibold mb-2">
                  {errors.first_name.message}
                </p>
              )}

              <label
                className="text-xl font-semibold text-gray-600 mb-1"
                htmlFor="last_name"
              >
                Last name
              </label>
              <input
                className="border-2 border-[#D2D2D2] rounded-lg mb-2 pl-4 w-full md:w-[500px] h-12 placeholder-gray-500"
                type="text"
                {...register("last_name")}
                placeholder="Enter your last name"
                name="last_name"
                id="last_name"
              />
              {errors.last_name && (
                <p className="text-red-500 text-sm font-semibold mb-2">
                  {errors.last_name.message}
                </p>
              )}

              <label
                className="text-xl font-semibold text-gray-600 mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                {...register("email")}
                placeholder="Please enter your email address"
                id="email"
                className="border-2 border-[#D2D2D2] rounded-lg mb-2 pl-4 w-full md:w-[500px] h-12 placeholder-gray-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm font-semibold mb-2">
                  {errors.email.message}
                </p>
              )}

              <label
                className="text-xl font-semibold text-gray-600 mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                {...register("password")}
                placeholder="Please enter your password"
                name="password"
                id="password"
                className="border-2 border-[#D2D2D2] rounded-lg mb-2 pl-4 w-full md:w-[500px] h-12 placeholder-gray-500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm font-semibold mb-2">
                  {errors.password.message}
                </p>
              )}

              <label
                className="text-xl font-semibold text-gray-600 mb-1"
                htmlFor="confirm_password"
              >
                Confirm Password
              </label>
              <input
                type="password"
                {...register("confirm_password")}
                placeholder="Please confirm your password"
                name="confirm_password"
                id="confirm_password"
                className="border-2 border-[#D2D2D2] rounded-lg mb-2 pl-4 w-full md:w-[500px] h-12 placeholder-gray-500"
              />
              {errors.confirm_password && (
                <p className="text-red-500 text-sm font-semibold mb-2">
                  {errors.confirm_password.message}
                </p>
              )}

              <label className="text-gray-700 text-sm font-semibold mb-2 flex items-start">
                <input
                  type="checkbox"
                  {...register("terms")}
                  name="terms"
                  className="h-5 w-5 border-2 rounded mr-2"
                />
                Accept our Terms and Conditions
              </label>
              {errors.terms && (
                <p className="text-red-500 text-sm font-semibold mb-2">
                  {errors.terms.message}
                </p>
              )}

              <button
                type="submit"
                className="w-full md:w-[500px] mt-4 h-12 rounded-lg bg-[#1E293B] hover:bg-[#334155] text-white text-lg font-semibold"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
