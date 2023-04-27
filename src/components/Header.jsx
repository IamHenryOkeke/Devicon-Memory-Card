const Header = () => {
  return (
    <div>
        <header className="text-center text-4xl font-header md:text-8xl bg-slate-600 py-8 text-shadow-md">
            Devicon Memory
        </header>
        <div className="h-3 md:h-5 bg-gray-900 mb-4 flex justify-center items-center">
            <div className="h-10 w-10 md:h-14 md:w-14 border-[5px] border-black rounded-full flex justify-center items-center bg-white">
                <div className="h-5 w-5 md:h-8 md:w-8 border-[5px] border-black rounded-full">
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Header
