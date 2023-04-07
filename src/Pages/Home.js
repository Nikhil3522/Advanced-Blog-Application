import AddBlogButton from "../Components/AddBlogButton";
import ShowBlog from "../Components/ShowBlog";
import PaginatedItems from "../Components/PaginatedItems";

const Home = () => {
    return (
        <div className="px-[50px] xs:px-[20px]">
            <AddBlogButton />
            {/* <ShowBlog /> */}
            <PaginatedItems />
        </div>
    )
}

export default Home;