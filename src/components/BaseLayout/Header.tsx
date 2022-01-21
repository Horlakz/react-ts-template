import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="justify-evenly flex border-b border-b-red-600 font-semibold p-2">
            <h1 className="text-lg text-red-600">React TypeScript + Sass + Tailwind Template</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    )
}
