import { Link, Outlet } from "react-router-dom"


export default function AppLayout() {
    return (
        <>
            <nav className="bg-blue-900 p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to='/' className="text-white text-xl font-bold">CartApp</Link>
                    <ul className="flex space-x-6">
                        <li>
                            <Link
                                to="/"
                                className="text-white hover:text-gray-200 transition-colors"
                            >
                                Productos
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/carrito"
                                className="text-white hover:text-gray-200 transition-colors"
                            >
                                Carrito
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <section className="max-w-screen-2xl mx-auto mt-10 p-5">
                <Outlet />
            </section>
        </>

    )
}
