import plus from '../Assets/Icon/plus.png';
import { useNavigate } from 'react-router-dom';

const AddBlogButton = () => {
    const navigate = useNavigate();
    return (
        <div
            className="w-[300px] h-[70px] cursor-pointer rounded-[10px] flex flex-row bg-blue-600 m-[auto] mt-2 shadow-md hover:shadow-lg"
            onClick={() => (navigate('/add-blog'))}
        >
            <div className="m-[auto]">
                <img src={plus} />
            </div>
            <h1 className="m-[auto] text-white text-[25px]">
                Create Blog
            </h1>
        </div>
    )
}

export default AddBlogButton;