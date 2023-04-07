import { useEffect, useState } from "react";
import {user} from '../Constants/Constants';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import menu from '../Assets/Icon/menu.png';
import { useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const FullBlog = () => {
    const navigate = useNavigate();
    const [showOption, setShowOption] = useState(false);
    const [userId, setUserId] = useState(null);
    const { blogId } = useParams();
    const [sessionBlog, setSessionBlog] = useState(null);
    const [edit, setEdit] = useState(false);
    const [textValue, setTextValue] = useState("");

    const notify = (message) =>{
        toast.success(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const deleteBlog = async () => {
        var temp = localStorage.getItem('blog');
        temp = JSON.parse(temp);
        await temp.reverse();
        temp.splice(blogId, 1);
        temp = JSON.stringify(temp)
        localStorage.setItem('blog', temp)
        navigate('/');
    }

    const onSubmit = async () => {
        var tempObj = sessionBlog;
        tempObj.content = textValue;
        tempObj =  JSON.stringify(tempObj);
        // console.log("s", tempObj);

        var temp = localStorage.getItem('blog');
        temp = await JSON.parse(temp);
        await temp.reverse();
        temp[blogId] = tempObj;
        await temp.reverse();
        temp = JSON.stringify(temp);
        localStorage.setItem('blog', temp);
        notify("New content Saved!");
        // navigate('/');
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
                                        onClick={() => {
                                            setEdit(!edit)
                                            setTextValue(sessionBlog.content)
                                            notify(`Edit mode ${!edit ? 'on': "off"}!`);
                                        }}
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
                    {edit === false?
                        <div >
                        <p 
                            className='text-[20px] text-center mt-4 text-ellipsis' 
                            dangerouslySetInnerHTML={{ __html: sessionBlog.content }}
                        >
                        </p>
                        </div> 
                        :
                        <div>
                            <ReactQuill 
                                theme="snow" 
                                // className="h-[200px] mt-4 mb-[50px] xs:max-w-[270px] md:min-w-[400px] md:mb-[50px] xs:mb-[100px]"
                                className="md:h-[250px] md:my-[80px] xs:my-[30px] "
                                value={textValue} 
                                onChange={setTextValue}
                                placeholder="Content"
                            />
                            <div 
                                className="bg-blue-600 w-[80px] text-center text-white  h-[40px] shadow-md rounded-md cursor-pointer hover:font-bold hover:shadow-2xl m-auto"
                                onClick={() => onSubmit()}
                            >
                                <h1 className="mt-2">POST</h1>
                            </div>
                        </div>
                    }
                </div>
            </div>: null}
            <ToastContainer />
        </div>
    )
}

export default FullBlog;