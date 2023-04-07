import { useState, useEffect } from "react"
import { Blog, user } from '../Constants/Constants';
import { useNavigate } from 'react-router-dom';
import pre  from '../Assets/Icon/Pre.png';
import next from '../Assets/Icon/next.png';

const PaginatedItems = () => {
    const navigate = useNavigate();
    const [currPage, setCurrPage] = useState(1);
    const [blogLength, setBlogLength] = useState(0);
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
            console.log("lenth", temp.length)
            setBlogLength(temp.length);
        }
        // console.log("temp", temp)
        setSessionBlogList(temp);
    }, [])
    return (
        <div className=" flex flex-col xs:w-[100%] md:w-[700px] m-[auto] ">
            {sessionBlogList != null ?
            sessionBlogList.map((item, index) => (
                index+1 <= currPage*3  && index+1 > (currPage-1)*3?
                <div
                        key={index+4} 
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
                                {/* {console.log("thumbnail", item.thumbnail)} */}
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
                    </div>: null
            ))
            : null}
            <div className="flex w-[150px] m-[auto] my-10 justify-around">
                <div 
                    className="cursor-pointer"
                    onClick={() =>{
                        if(currPage > 1){
                            setCurrPage(currPage - 1)
                        }
                    }}
                >
                    <img src={pre}/>
                </div>
                <div className="my-[auto] m-[auto] text-[20px] font-bold text-blue-600">
                    {currPage}
                </div>
                <div className="cursor-pointer"
                    onClick={() => {
                        if((currPage*3 ) < blogLength){
                            setCurrPage(currPage + 1)
                        }
                    }} 
                >
                    <img src={next}/>
                </div>
            </div>
        </div>
    )
}

export default PaginatedItems;