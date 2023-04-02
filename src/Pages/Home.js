import AddBlogButton from "../Components/AddBlogButton";
import ShowBlog from "../Components/ShowBlog";

const Home = () => {
    return (
        <div className="px-[50px]">
            <AddBlogButton />
            <ShowBlog />
        </div>
    )
}

export default Home;