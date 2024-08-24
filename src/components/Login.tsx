
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios, { AxiosResponse } from "axios";

interface IFormType {
    username:string;
  password: string;
  terms?: boolean;
  
}



const schema = yup
  .object({
    username:yup.string().required("username is a required field"),
    password: yup.string().required("Password is a required field"),
    terms: yup.boolean().oneOf([true], "You must accept the terms and conditions"),
  })
  .required();

export function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormType>({
    resolver: yupResolver(schema),
  });

   const  onSubmit: SubmitHandler<IFormType> = async (data) => {
   const responseData=await axios.post('https://ann1.pythonanywhere.com/users/login/'
, 
  data
)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
// usenavigate home page
console.log(responseData)
    console.log(data);
  };

  async function loginWithGoogle(): Promise<void> {
    try {
        const authInstance = window.gapi.auth2.getAuthInstance();
        const googleUser: gapi.auth2.GoogleUser = await authInstance.signIn();

        const idToken: string = googleUser.getAuthResponse().id_token;

        const response: AxiosResponse = await axios.post("https://ann1.pythonanywhere.com/auth/auth_google_login_create", {
            token: idToken
        });

        console.log('Login successful:', response.data);
        
    } catch (error: unknown) {
        console.error('Error during Google login:', error);
    }
}


  // function logoutUser() {
  //   localStorage.removeItem('token');
  // }
  return (
    <div className="flex items-center justify-center h-screen p-4  bg-[url(https://e0.pxfuel.com/wallpapers/655/814/desktop-wallpaper-dark-web-dark-developer.jpg)] ">
      <div className="flex bg-[#FFFBFA] rounded-[42px] overflow-hidden max-w-full md:max-w-[83rem] w-full h-[55rem]">
    
        <div className="hidden md:block w-[755px] rounded-l-[42px] bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1618477388954-7852f32655ec?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJvbnQlMjBlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D)]">
        </div>
        

        <div className="flex items-center flex-1 px-4 py-12 md:px-24">
          <div className="flex flex-col w-[100%]">
            <div className="loginWithGoogle flex flex-col md:flex-row justify-between mb-14">
              <div onClick={loginWithGoogle} className="flex items-center justify-center w-full md:w-1/2 h-20 mb-4 md:mb-0 border-2 rounded-lg border-[#D2D2D2] text-lg text-[#2E2E2E] gap-3 cursor-pointer">
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
                className="mt-4 w-full md:w-[420px] h-16 bg-black text-white text-[20px] font-bold rounded-full"
                type="submit"
              >
               Log In
              </button>
               </div>
            </form>

           
          </div>
        </div>
      </div>
    </div>
  );
}
