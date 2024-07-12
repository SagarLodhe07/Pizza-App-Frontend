import LoginImage from '../Auth/login.png'

function SignUp() {
  return (<>
    <section className="text-gray-600 body-font">
        <div className="flex flex-wrap items-center h-screen px-10 py-6 mx-auto">
                    <div>
                        <img src={LoginImage} alt="" />
                    </div>
                <form className="flex flex-col w-full p-8 mt-10 bg-gray-200 rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
                    <h2 className="mb-5 font-medium text-gray-900 title-font text-lg">Sign Up</h2>
                     {/* For label & Input */}
                            <div className="relative mb-4">
                             <label htmlFor="firstName" className="text-sm leading-7 text-gray-600">First Name</label>   
                                <input type="text" id="firstname" name="firstname" 
                                required
                                placeholder="John"
                                minLength={6}
                                className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"/>

                            </div> 
                                         {/* For label & Input */}
                            <div className="relative mb-4">
                             <label htmlFor="firstName" className="text-sm leading-7 text-gray-600">Email<span className="text-red-600 ">*</span></label>   
                                <input type="text" id="email" name="email" 
                                required
                                placeholder="@email.com"
                                className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"/>

                            </div>              
                            <div className="relative mb-4">
                             <label htmlFor="firstName" className="text-sm leading-7 text-gray-600">Mobile Number<span className="text-red-600 ">*</span></label>   
                                <input type="text" id="mobilenumber" name="mobilenumber" 
                                required
                                maxLength={12}
                                placeholder="enter mobile number"
                                className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"/>

                            </div>              
                            <div className="relative mb-4">
                             <label htmlFor="password" className="text-sm leading-7 text-gray-600">Password<span className="text-red-600 ">*</span></label>   
                                <input type="password" id="password" name="password" 
                                required
                                placeholder="Enter Password"
                                className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"/>

                            </div> 
                                {/* Sign Up Button */}
                            <button className="w-full px-8 py-2 text-lg text-white bg-yellow-500 bottom-0 rounded focus:outline-none hover:bg-yellow-600">Create Account</button>

                            <p className="mt-3 text-gray-500">Already have an Account ? <a href="/login" className=" text-yellow-500"> Login</a></p>             
                </form>

        </div>
    </section>
  </>);
}

export default SignUp;
