import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { useEffect } from "react";
import {useNavigate } from "react-router-dom";
import axios from "axios";
// import axios, { AxiosResponse } from "axios";

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
    first_name:yup.string().required( " First name is a required field"),
    last_name: yup.string().required("Last name is a required field"),
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
  const {
    register,
    handleSubmit,
    // setValue,
    // watch,
    formState: { errors },
  } = useForm<IFormType>({
    resolver: yupResolver(schema),
  });
  const navigate=useNavigate()
  const onSubmit: SubmitHandler<IFormType> = async (data) => {
    try {
      
      const response = await axios.post("https://your-backend-url.com/api/register", data);
      console.log("Registration successful:", response.data);
      navigate("/home");
    } catch (error) {
      console.error("Error during registration:", error);
    }
    console.log(data);
  };
//   function loadGapiScript(): Promise<void> {
//     return new Promise((resolve, reject) => {
//         const script = document.createElement('script');
//         script.src = 'https://apis.google.com/js/api.js';
//         script.onload = () => resolve();
//         script.onerror = (error) => reject(error);
//         document.head.appendChild(script);
//     });
// }

// async function initializeGapi(): Promise<void> {
//     return new Promise((resolve, reject) => {
//         gapi.load('client:auth2', async () => {
//             try {
//                 await gapi.client.init({
//                     clientId: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
//                     scope: 'profile email'
//                 });
//                 resolve();
//             } catch (error) {
//                 reject(error);
//             }
//         });
//     });
// }
//   async function loginWithGoogle(): Promise<void> {
//     try {
//       await loadGapiScript();
//       await initializeGapi();
//         const authInstance = window.gapi.auth2.getAuthInstance();
//         const googleUser: gapi.auth2.GoogleUser = await authInstance.signIn();

//         const idToken: string = googleUser.getAuthResponse().id_token;

//         const response: AxiosResponse = await axios.post("https://ann1.pythonanywhere.com/auth/auth_google_login_create", {
//             token: idToken
//         });

//         console.log('Login successful:', response.data);
        
//     } catch (error: unknown) {
//         console.error('Error during Google login:', error);
//     }
// }

  return (
    <div className="flex items-center justify-center h-screen p-4  bg-[url(https://wallpapers.com/blog/wp-content/uploads/2023/06/glitter-golden-bokeh-lights-scaled.jpeg)] ">
      <div className="flex bg-[#FFFBFA] rounded-[42px] overflow-hidden max-w-full md:max-w-[83rem] w-full">
    
        <div className="hidden md:block w-[755px] rounded-l-[42px] bg-cover bg-center bg-[url(https://s3-alpha-sig.figma.com/img/881b/e016/1dd5b741b8cae42b2b56a5fdea8a8e76?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qBLK~iVNBoN9Sk9~1zUFknmBRkKVnr3tt4NpBfB2n1WX8BCNQLl50WNyKJ0vRIO-GkFnQ2j8j-q7cS7fJMNTB61DGAvZGqlBJKrvS5k1-Y62CVbQ2r7OVa~6qWDIFSXcVXdn6EcJOhHRX~jWHShLUHwH9MgP9kpEIrpJsfYUXMr3bIo9fspzIVUppqBkg1MvXmhE17ZgSvVegccPMBN1I2SYwvLPp11HhdZvBu5mGj3i6THOrLotbi9Cance31JPhRmGLD2uQCnJmf7h~xWEn7yU4JlOqE07VJel7nbO4CD5CmlEseIwzd6V8W2O6LDsIagffPpA177G9mZOOIA2qA__)]">
        </div>
        

        <div className="flex-1 px-4 py-12 md:px-24">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-between mb-12">
              <div  className="flex items-center justify-center w-full md:w-1/2 h-20 mb-4 md:mb-0 border-2 rounded-lg border-[#D2D2D2] text-lg text-[#2E2E2E] gap-3 cursor-pointer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="GoogleIcon" />
                <span className="text-gray-600 font-semibold">Google Account</span>
              </div>
              <div className="flex items-center justify-center w-full md:w-1/2 h-20 md:ml-4 border-2 rounded-lg border-[#D2D2D2] text-lg text-[#2E2E2E] gap-3 cursor-pointer">
                <img className="w-6 h-6" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="FacebookIcon" />
                <span className="text-gray-600 font-semibold">Facebook Account</span>
              </div>
            </div>

            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
           <label className="text-2xl font-semibold text-gray-600" htmlFor="username">Username</label>
              <input
                className="border-2 border-[#D2D2D2] rounded-lg mb-10 pl-4 w-full md:w-[537px] h-16 placeholder-gray-500"
                type="text"
                {...register("username")}
                placeholder="Enter your full name"
                name="username"
                id="username"
              />
              {errors.username && <p className=" font-semibold  text-red-500 xs:text-[20px]  sm:text-[25px] mt-[-25px] mb-[10px]  ">{errors.username.message}</p>}


              <label className="text-2xl font-semibold text-gray-600" htmlFor="first_name">First name</label>
              <input
                className="border-2 border-[#D2D2D2] rounded-lg mb-10 pl-4 w-full md:w-[537px] h-16 placeholder-gray-500"
                type="text"
                {...register("first_name")}
                placeholder="Enter your full name"
                name="first_name"
                id="first_name"
              />
              {errors.first_name && <p className=" font-semibold  text-red-500 xs:text-[20px]  sm:text-[25px] mt-[-25px] mb-[10px]  ">{errors.first_name.message}</p>}

              <label className="text-2xl font-semibold text-gray-600" htmlFor="last_name">Last name</label>
              <input
                className="border-2 border-[#D2D2D2] rounded-lg mb-10 pl-4 w-full md:w-[537px] h-16 placeholder-gray-500"
                type="text"
                {...register("last_name")}
                placeholder="Enter your Last name"
                name="last_name"
                id="last_name"
              />
              {errors.last_name && <p className="text-red-500 font-semibold  xs:text-[20px] sm:text-[25px] mt-[-25px] mb-[10px] ">{errors.last_name.message}</p>}

              <label className="text-2xl font-semibold text-gray-600" htmlFor="email">Email</label>
              <input
                type="text"
                {...register("email")}
                placeholder="Please enter your email address"
                id="email"
                className="border-2 border-[#D2D2D2] mb-10 rounded-lg pl-4 w-full md:w-[537px] h-16 placeholder-gray-500"
              />
              {errors.email && <p className="text-red-500 font-semibold  xs:text-[20px] sm:text-[25px] mt-[-25px] mb-[10px] ">{errors.email.message}</p>}

              <label className="text-2xl font-semibold text-gray-600" htmlFor="password">Password</label>
              <input
                type="password"
                {...register("password")}
                placeholder="Please enter your password"
                name="password"
                id="password"
                className="border-2 border-[#D2D2D2] mb-10 rounded-lg pl-4 w-full md:w-[537px] h-16 placeholder-gray-500"
              />
              {errors.password && <p className="text-red-500 font-semibold xs:text-[20px] sm:text-[25px] mt-[-25px] mb-[10px]  ">{errors.password.message}</p>}

              <label className="text-2xl font-semibold text-gray-600" htmlFor="confirm_password">Confirm Password</label>
              <input
                type="password"
                {...register("confirm_password")}
                placeholder="Please confirm your password"
                name="confirm_password"
                id="confirm_password"
                className="border-2 border-[#D2D2D2] mb-10 rounded-lg pl-4 w-full md:w-[537px] h-16 placeholder-gray-500"
              />
              {errors.confirm_password && <p className="text-red-500 font-semibold xs:text-[20px] sm:text-[25px] mt-[-25px] mb-[10px]  ">{errors.confirm_password.message}</p>}

              <div className="flex items-center gap-2 mb-4">
                <input
                  className="w-5 h-5 border border-[#D2D2D2]"
                  type="checkbox"
                  {...register("terms")}
                />
                <span className="text-gray-600 text-lg">Remember Me</span>
              </div>

              
               <div className="md:pl-[50px]">
               <button
              
                className="mt-4 w-full md:w-[420px] h-16 bg-black text-white rounded-full"
                type="submit"
              >
                Register
              </button>
               <div className=" flex justify-center text-[25px] py-2 pr-[4rem] text-gray-600 font-medium xs:text-[16px] sm:text-[25px] md:text-2xl">
              Already have an account?{" "}
              <a
                className="text-yellow-500 cursor-pointer"
                onClick={() => navigator("/login")}
              >
                Log in
              </a>
            </div>
               </div>
            </form>

           
          </div>
        </div>
      </div>
    </div>
  );
}
