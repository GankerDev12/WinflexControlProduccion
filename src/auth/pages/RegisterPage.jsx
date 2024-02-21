import Swal from "sweetalert2";
import { useAuthStore, useForm } from "../../hooks"
import { useEffect } from "react";
import { Link } from "react-router-dom";

const registerFormFields = {
    name: '',
    email: '',
    password: '',
    password2: ''
}

export const RegisterPage = () => {
    const { startRegister, errorMessage } = useAuthStore();
    const { name, email, password, password2, onInputChange } = useForm(registerFormFields);

    const onRegisterSubmit = (event) => {
        event.preventDefault();
        if (password !== password2) {
            Swal.fire('Error en registro', 'Contraseñas no son iguales', 'error');
            return
        }
        startRegister({ name, email, password })
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
                <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                    <div className="bg-white p-12 rounded-2xl drop-shadow-lg">
                        <h1 className="text-2xl font-semibold mb-4 flex justify-center">Registro</h1>
                        <form onSubmit={onRegisterSubmit} >
                            {/* Username Input */}
                            <label htmlFor="name" className='block text-gray-600'>Nombre</label>
                            <input type="text" name='name' onChange={onInputChange} className='w-full border border-gray-300 rounde-md py-2 px-3 focus:outline-none focus:border-blue-500' autoComplete='off' />
                            {/* Email Input */}
                            <label htmlFor="email" className='block text-gray-600'>Email</label>
                            <input type="email" name='email' onChange={onInputChange} className='w-full border border-gray-300 rounde-md py-2 px-3 focus:outline-none focus:border-blue-500' autoComplete='off' />
                            {/* Password Input */}
                            <label htmlFor="password" className='block text-gray-600'>Contraseña</label>
                            <input type="password" name='password' onChange={onInputChange} className='w-full border border-gray-300 rounde-md py-2 px-3 focus:outline-none focus:border-blue-500' autoComplete='new-password' />
                            {/*Repeat Password Input */}
                            <label htmlFor="password2" className='block text-gray-600'>Repetir contraseña</label>
                            <input type="password" name='password2' onChange={onInputChange} className='w-full border border-gray-300 rounde-md py-2 px-3 focus:outline-none focus:border-blue-500' autoComplete='new-password' />

                            <button type='submit' className='bg-blue-500 mt-10 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full'>Registrarse</button>
                        </form>
                        {/* Login link */}
                        <div className="mt-6 text-blue-500 text-center">
                            <Link to="/auth/login" className="hover:underline">Ir a inicio de sesión</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
