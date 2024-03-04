import { useEffect } from "react";
import { useAuthStore, useForm } from "../../hooks"
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const loginFormFields = {
    email: '',
    password: ''
}

export const LoginPage = () => {
    const { email, password, onInputChange } = useForm(loginFormFields);
    const { startLogin, errorMessage } = useAuthStore();

    const loginSubmit = async (event) => {
        event.preventDefault();
        startLogin({ email: email, password: password });
    }

    useEffect(() => {
        if (errorMessage !== undefined) {
            Swal.fire('Error en la autenticación', errorMessage, 'error');
        }
    }, [errorMessage])


    return (
        <div>
            {/* Left: Image */}
            <div className="bg-gray-100 flex justify-center items-center h-screen" >
                <div className="w-1/2 h-screen hidden lg:block p-10">
                    <img src="https://legacy.plasticseurope.org/application/files/2615/1274/2372/5.1._aaheader.png" alt="winflex lampa" className='object-cover w-full h-full  rounded-2xl' />
                </div>
                {/* Right:  Login Form */}
                <div className="lg:p-36 md:p-52 sm:20 p-4 w-full lg:w-1/2">
                    <div className="bg-white p-12 rounded-2xl drop-shadow-lg">
                        <h1 className="text-2xl font-semibold mb-4 flex items-center justify-center">Inicia sesión</h1>
                        <form onSubmit={loginSubmit}>
                            {/* Username Input */}
                            <label className='block text-gray-600'>Usuario</label>
                            <input type="email" name='email' onChange={onInputChange} className='w-full border border-gray-300 rounde-md py-2 px-3 focus:outline-none focus:border-blue-500' autoComplete='off' />
                            {/* Password Input */}
                            <label className='block text-gray-600'>Contraseña</label>
                            <input type="password" name='password' onChange={onInputChange} className='w-full border border-gray-300 rounde-md py-2 px-3 focus:outline-none focus:border-blue-500' autoComplete='off' />
                            {/* Remember me checkbox */}
                            <div className='mb-6 mt-4 flex items-center'>
                                <input type="checkbox" id='remember' name='remember' className='text-blue-500' />
                                <label htmlFor="remember" className='text-gray-600 ml-2'>Recuérdame</label>
                            </div>
                            {/* Forgot password */}
                            <div>
                                <a href="#" className='hover: underline'>¿Olvidaste tu contraseña?</a>
                            </div>
                            <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full'>Entrar</button>
                        </form>
                        {/* Sign up  Link  */}
                        <div className="mt-6 text-blue-500 text-center">
                            <Link to="/auth/register" className="hover:underline">Registrate aquí</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
