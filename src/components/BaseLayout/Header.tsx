export default function Header() {
    return (
        <header className="justify-evenly flex border-b border-b-red-600 font-semibold p-2">
            <h1 className="text-lg text-red-600">React TypeScript + Sass + Tailwind Template</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </header>
    )
}
