import { Link } from "@tanstack/react-router"

const Sidebar = () => {
    return (
        <div className="flex flex-col  bg-gradient-to-tr from-gray-800 text-white to-gray-900 h-screen p-4">
            <Link className="p-2 [&.active]:bg-gray-700 rounded-lg" to={'/'}>Dashboard</Link>
            <Link className="p-2 [&.active]:bg-gray-700 rounded-lg" to={'/admin'}>Admin</Link>
            <Link className="p-2 [&.active]:bg-gray-700 rounded-lg" to={'/posts'}>Posts</Link>
            <Link className="p-2 [&.active]:bg-gray-700 rounded-lg" to={'/todos'}>Todos</Link>
            <Link className="p-2 [&.active]:bg-gray-700 rounded-lg" to={'/stats'}>Stats</Link>
        </div>
    )
}
export default Sidebar