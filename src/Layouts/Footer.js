const Footer = () =>{
    return (
        <div className="px-[50px] border-1 bg-blue-600 h-[60px] pt-[15px] mt-auto">
            <div>
                {/* logo */}
            </div>
            <div className="text-white flex m-[auto] justify-between w-[400px]">
                <div className="cursor-pointer hover:font-bold w-[70px]">
                    Home
                </div>
                <div className="cursor-pointer hover:font-bold w-[70px]">
                    Profile
                </div>
                <div className="cursor-pointer hover:font-bold w-[70px]">
                    Contact
                </div>
                <div className="cursor-pointer hover:font-bold w-[70px]">
                    Login
                </div>
            </div>
        </div>
    )
}

export default Footer;