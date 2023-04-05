import { useEffect, useState } from "react";
import {user} from '../Constants/Constants';
import { useParams } from 'react-router-dom';
import menu from '../Assets/Icon/menu.png';
import { useNavigate } from "react-router-dom";

const FullBlog = () => {
    const navigate = useNavigate();
    const [showOption, setShowOption] = useState(false);
    const [userId, setUserId] = useState(null);
    const { blogId } = useParams();
    const [sessionBlog, setSessionBlog] = useState(null);

    const deleteBlog = () => {
        var temp = localStorage.getItem('blog');
        temp = JSON.parse(temp);
        temp.splice(blogId, 1);
        temp = JSON.stringify(temp)
        localStorage.setItem('blog', temp)
        navigate('/');
    }

    useEffect(() => {
        var tempUserId = sessionStorage.getItem('userId');
        setUserId(tempUserId);
        var temp = localStorage.getItem('blog');
        temp = JSON.parse(temp);
        if(temp){
            temp.map((item, i) => {
                const parsedObject = JSON.parse(item);
                temp[i] = parsedObject;
            })
            temp.reverse();

        }
        setSessionBlog(temp[blogId]);
    }, [])
    return (
        <div className="px-[50px] flex">
            {sessionBlog != null ?
            <div className="flex w-[700px] m-[auto] flex-col mt-20 border-2 p-4 bg-slate-100 shadow-md rounded-xl hover:shadow-lg">
                <div className='flex justify-around'>
                    {user.map(({userId, userName, avatar}) => (
                        (userId == sessionBlog.author) ? 
                            <div className='w-[15%] flex flex-col'>
                                <img src={avatar} className='rounded-[50%] w-[70px] h-[70px] object-cover border-2 m-[auto] bg-blue-500' />
                                <h3 className='m-[auto]'>{userName}</h3>
                            </div> : null
                    ))}
                    <h1 className='font-bold w-[85%] text-[35px] text-center my-2 text-blue-600'>{sessionBlog.title}</h1>

                    {
                        sessionBlog.author == userId || userId == 0 ?
                        <div 
                            className='mt-4 hover:cursor-pointer'
                            onClick={() => (setShowOption(!showOption))}
                        >
                            <img src={menu}/>
                            {showOption ? 
                                <div className="bg-blue-500 p-1 absolute text-white">
                                    <h2 
                                        className="border-2 p-1 hover:bg-white hover:text-black"
                                        onClick={() => (deleteBlog())}
                                    >
                                        Delete
                                    </h2>
                                    <h2 
                                        className="border-2 p-1 hover:bg-white hover:text-black"
                                        // onClick={() => ()}
                                    >
                                        Edit
                                    </h2>
                                </div> : null
                            }
                            
                        </div>: null
                    }
                </div>
                <div className=' flex flex-col overflow-hidden text-clip mt-4'>
                    <div className='w-[50%] m-[auto]'>
                        {/* {console.log("thumbnail", thumbnail)} */}
                        <img src={sessionBlog.thumbnail}/>
                    </div>
                    <div >
                    <p 
                        className='text-[20px] text-center mt-4 text-ellipsis' 
                        dangerouslySetInnerHTML={{ __html: sessionBlog.content }}
                    >
                    </p>
                    </div>
                </div>
            </div>: null}
        </div>
    )
}

export default FullBlog;