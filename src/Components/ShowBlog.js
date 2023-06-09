import { useEffect, useState } from 'react';
import { Blog, user } from '../Constants/Constants';
import { useNavigate } from 'react-router-dom';

const ShowBlog = () => {
    const navigate = useNavigate();
    const [sessionBlogList, setSessionBlogList] = useState(null);

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
        setSessionBlogList(temp);
    }, [])
    
   return (
    // <div className=" bg-pink-300">
        <div className=" flex flex-col xs:w-[100%] md:w-[700px] m-[auto] ">
            {sessionBlogList ?
            sessionBlogList.map((item, index) => (
                    <div
                        key={index} 
                        className="flex flex-col mt-20  border-2 p-4 bg-slate-100 shadow-md rounded-xl hover:shadow-lg hover:cursor-pointer"
                        onClick={() => {navigate(`/full-blog/${index}`)}}
                    >
                        <div className='flex justify-around'>
                            {user.map(({userId, userName, avatar}) => (
                                (userId == item.author) ? 
                                    <div className='w-[15%] flex flex-col'>
                                        <img src={avatar} className='rounded-[50%] md:w-[70px] md:h-[70px] xs:w-[50px] xs:h-[50px] object-cover border-2 m-[auto] bg-blue-500' />
                                        <h3 className='m-[auto]'>{userName}</h3>
                                    </div> : null
                            ))}
                            <h1 className='font-bold w-[85%] text-[35px] text-center my-2 text-blue-600'>{item.title}</h1>
                        </div>
                        <div className=' flex  max-h-[260px]  overflow-hidden text-clip mt-4'>
                            <div className='w-[50%] '>
                                <img src={item.thumbnail} />
                            </div>
                            <div className='w-[50%] '>
                            <p 
                                className='text-[20px] text-center mt-4 text-ellipsis' 
                                dangerouslySetInnerHTML={{ __html: item.content }}
                            >
                            </p>
                            </div>
                        </div>
                    </div>
                )) 
             : null}
         
        </div>
    // </div>
   )
}

export default ShowBlog;