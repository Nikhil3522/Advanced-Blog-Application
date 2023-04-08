import React, { useState, useEffect } from "react";

import { Blog, user } from "../Constants/Constants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddBlog = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [blogTitle, setVlogTitle] = useState("");
    const [textValue, setTextValue] = useState("");
    const [warning, setWarning] = useState(false);
    const [author, setAuthor] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [blogObj, setBlogObj] = useState({
        thumbnail: null,
        title: null,
        content: null,
        author: null,
    })
    const [userProfile, setUserProfile] = useState({
        userName: null,
        avatar: null
    });
    const userId = sessionStorage.getItem('userId');

    const notify = () =>{
        toast.error('Please fill all the data!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    useEffect(() => {
        user.map((item) => (
            userId == item.userId ?
                setUserProfile({
                    userName: item.userName,
                    avatar: item.avatar
                })
                : null
        ))
    }, [selectedImage])


    const handleImageChange = (event) => {
        const selectedFile = (event.target.files[0]);
        if (selectedFile && selectedFile.type.startsWith("image/")) {
            setSelectedImage(URL.createObjectURL(selectedFile));

        } else {
            setSelectedImage(null);
        }
    };

    useEffect(() => {
        if(blogObj.thumbnail != null && blogObj.title != null && blogObj.content != null){
            const blogList  = localStorage.getItem('blog');
            
            if(blogList != null){
                const parsedArray = JSON.parse(blogList);
                var finalArr = [];
                parsedArray.map((item, i) => {
                    const parsedObject = JSON.parse(item);
                    finalArr[i] = parsedObject;
                })

                finalArr = [...finalArr, blogObj];
                finalArr.map((item, i) => {
                    finalArr[i] = JSON.stringify(item);
                });

                finalArr = JSON.stringify(finalArr);


                const jsonObject = JSON.stringify(blogObj);
                const temp = [jsonObject];
                const jsonArray = JSON.stringify(temp);
                localStorage.setItem('blog', finalArr);
            }else{
                const jsonObject = JSON.stringify(blogObj);
                const temp = [jsonObject];
                const jsonArray = JSON.stringify(temp);
                localStorage.setItem('blog', jsonArray);

            }

            // change location to home page
            navigate('/');

        }else{
            notify();
            setWarning(true);
            setTimeout(() => (setWarning(false)), 3000)
        }
    }, [blogObj])

    const onSubmit = () => {
        setBlogObj({
            thumbnail: selectedImage,
            title: blogTitle,
            content: textValue,
            author: (sessionStorage.getItem('userId'))
        });
    }

    return (
        <div className="px-[50px] flex flex-col mt-4">
            <div className="m-[auto] flex flex-col">
                <div className="flex  justify-between">
                    <div className="m-[auto] ">
                        <img src={userProfile.avatar} className="rounded-[50%] md:w-[90px] md:h-[90px] xs:w-[50px] xs:w-[50px] object-cover" />
                        <h1 className="font-bold text-center">{userProfile.userName}</h1>
                    </div>
                    <div className="w-[220px]">
                        <img
                            src={selectedImage}
                            className="w-[150px] h-[150px] object-cover border-2"
                        />
                        <div className="flex flex-col">
                            <label htmlFor="image-input">Select a Thumbnail:</label>
                            <input
                                id="image-input"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>
                </div>

                <input 
                    type="text" 
                    placeholder="Title" 
                    className="border-2 my-2 h-[40px] px-2" 
                    value={blogTitle}
                    onChange={(e) => setVlogTitle(e.target.value)}
                />
                <ReactQuill 
                    theme="snow" 
                    className="h-[200px] xs:max-w-[270px] md:max-w-[370px] md:mb-[50px] xs:mb-[100px]"
                    value={textValue} 
                    onChange={setTextValue}
                    placeholder="Content"
                />
                {/* <textarea
                    className="border-2 h-[200px] w-[400px] p-2"
                    id="my-textarea"
                    value={textValue}
                    onChange={(e) => setTextValue(e.target.value)}
                    placeholder="Content"
                /> */}
            </div>
            {warning ?
                <div className="text-center text-red-600 font-bold">
                    Please fill all the data!
                </div>
                : null
            }
            <div 
                className="bg-blue-600 w-[80px] text-center text-white mt-2 h-[40px] shadow-md rounded-md cursor-pointer hover:font-bold hover:shadow-2xl m-auto"
                onClick={() => onSubmit()}
            >
                <h1 className="mt-2">POST</h1>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddBlog;