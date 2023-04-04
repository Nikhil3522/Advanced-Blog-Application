import { useEffect, useState } from "react";
import {user} from '../Constants/Constants';
import { useParams } from 'react-router-dom';

const FullBlog = () => {
    const { blogId } = useParams();
    const [sessionBlog, setSessionBlog] = useState(null);

    useEffect(() => {
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
            <div className="flex w-[700px] m-[auto] flex-col mt-20 border-2 p-4 bg-slate-100 shadow-md rounded-xl hover:shadow-lg hover:cursor-pointer">
                <div className='flex justify-around'>
                    {user.map(({userId, userName, avatar}) => (
                        (userId == sessionBlog.author) ? 
                            <div className='w-[15%] flex flex-col'>
                                <img src={avatar} className='rounded-[50%] w-[70px] h-[70px] object-cover border-2 m-[auto] bg-blue-500' />
                                <h3 className='m-[auto]'>{userName}</h3>
                            </div> : null
                    ))}
                    <h1 className='font-bold w-[85%] text-[35px] text-center my-2 text-blue-600'>{sessionBlog.title}</h1>
                </div>
                <div className=' flex flex-col overflow-hidden text-clip mt-4'>
                    <div className='w-[50%] m-[auto]'>
                        {/* {console.log("thumbnail", thumbnail)} */}
                        <img src={sessionBlog.thumbnail}/>
                    </div>
                    <div >
                    <p className='text-[20px] text-center mt-4 text-ellipsis'>{sessionBlog.content}</p>
                    </div>
                </div>
            </div>: null}
        </div>
    )
}

export default FullBlog;