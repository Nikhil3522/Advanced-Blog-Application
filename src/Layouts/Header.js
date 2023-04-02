import { useNavigate } from 'react-router-dom';

    

const Header =() =>{
    const navigate = useNavigate();
    return (
        <div className="px-[50px] border-1 bg-blue-600 h-[60px] pt-[15px]">
            <div>
                {/* logo */}
            </div>
            <div className="text-white flex m-[auto] justify-between w-[400px]">
                <div 
                    className="cursor-pointer hover:font-bold w-[70px]"
                    onClick={() => (navigate('/'))}
                >
                    Home
                </div>
                <div 
                    className="cursor-pointer hover:font-bold w-[70px]"
                    onClick={() => (navigate('/add-blog'))}
                >
                    Add Blog
                </div>
                <div className="cursor-pointer hover:font-bold w-[70px]">
                    Contact
                </div>
                <div 
                    className="cursor-pointer hover:font-bold w-[70px]"
                    onClick={() => (navigate('/login'))}
                >
                    Login
                </div>
            </div>
        </div>
    )
}

export default Header;