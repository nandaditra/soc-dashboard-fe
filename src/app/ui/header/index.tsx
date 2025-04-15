export default function Header() {
    return (
        <header className="px-4 py-4 md:px-4 bg-white">
            <nav className="flex flex-grow items-center">
                <div className="ml-auto flex">
                    <button className="bg-white text-sky-600 px-6 py-2 rounded-full font-bold border border-1 border-sky-600">
                        Login
                    </button>
                </div>
            </nav>
        </header>
    )
}