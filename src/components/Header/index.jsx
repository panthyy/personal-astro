import { useTheme } from 'next-themes'
function Header() {
    const { theme, setTheme } = useTheme()

    return (
        <header className="  h-[123px] mt-4  flex items-center justify-center mb-[50px] sm:mb-[133px] ">
            <div className="w-full  ">
                <div className=" flex h-[29px] justify-between  ">
                    <div className="text-[18px] font-[Inter] ">
                        BSCE Student at Lund university
                    </div>
                    <nav className=" flex Nav gap-7 items-center justify-center ">
                        <ul className="text-[18px] hidden sm:flex gap-7 group-hover:cursor-pointer align-middle gap">
                            <li className="group">
                                <a href="#Projects">
                                    <p>Projects</p>
                                </a>
                            </li>
                            <li>
                                <a href="#Resume">
                                    <p>Resume</p>
                                </a>
                            </li>
                            <li>
                                <a href="#Contact">
                                    <p>Contact</p>
                                </a>
                            </li>
                        </ul>
                        <button
                            onClick={() =>
                                setTheme(theme === 'dark' ? 'light' : 'dark')
                            }
                            className=" "
                        >
                        
                        </button>
                    </nav>
                </div>
                <nav className=" flex Nav gap-7 items-center justify-center ">
                    <ul className="text-[18px] mt-10 justify-evenly w-full sm:hidden flex  group-hover:cursor-pointer align-middle gap">
                        <li className="group">
                            <a href="#Projects">
                                <p>Projects</p>
                            </a>
                        </li>
                        <li>
                            <a href="#Resume">
                                <p>Resume</p>
                            </a>
                        </li>
                        <li>
                            <a href="#Contact">
                                <p>Contact</p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export { Header }
