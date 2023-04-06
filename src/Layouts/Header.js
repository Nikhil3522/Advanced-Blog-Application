import { useNavigate } from 'react-router-dom';
import search from  '../Assets/Icon/search.png'

    

const Header =() =>{
    const navigate = useNavigate();
    return (
        <div className="px-[50px] border-1  bg-blue-600 h-[60px] pt-[15px]">
            <div className="text-white flex m-[auto] justify-between md:w-[400px]">
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
                {/* <div className="cursor-pointer hover:font-bold w-[200px] flex justify-around h-[30px] ">
                    <input
                        type="text" 
                        placeholder='search'
                        className='w-[140px]'
                    />
                    <img src={search} />
                </div> */}
                {sessionStorage.getItem('userId') != null ? 
                    <div 
                        className="cursor-pointer hover:font-bold w-[70px]"
                        onClick={() => {
                            sessionStorage.clear()
                            navigate('login')
                        }}
                    >
                        Logout
                    </div> : null
                }
            </div>
        </div>
    )
}

export default Header;