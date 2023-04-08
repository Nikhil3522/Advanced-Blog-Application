import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { user } from '../Constants/Constants';
import { useNavigate } from "react-router-dom";

const SearchBlog = () => {
    const navigate = useNavigate();
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);

    var {searchText} = useParams()

    useEffect(()=>{
        console.log("result", result);
    }, [result])

    useEffect( () => {
        var temp = localStorage.getItem('blog');
        temp = JSON.parse(temp);
        temp.map((item, i) => {
            var tempObj = JSON.parse(item);
            var title = tempObj.title;
            var content = tempObj.content;
            searchText = searchText.toLowerCase();
            if (title.toLowerCase().includes(searchText) || content.toLowerCase().includes(searchText)) {
                console.log("ok");
                var tempResult = [];
                tempResult.push(tempObj);
                setResult(tempResult);
            }
            temp[i] = tempObj;
        })
        console.log("temp", temp)
        setLoading(false)
    }, []);


    return (
        <>
        {loading ?
            <div>
                <h1>loading</h1>
            </div>
        :
        <div  className=" flex flex-col xs:w-[100%] md:w-[700px] m-[auto] ">
            <h1 className="text-center">Result for <span className="text-blue-600">{searchText}</span></h1>
            <div>
            {result.map((item, index) => (
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
                    </div>
                )) }
            </div>
        </div>}
        </>

    )
}

export default SearchBlog;