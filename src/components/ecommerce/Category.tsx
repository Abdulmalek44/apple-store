import { TCategory } from "@/Types";
import { Button } from "../ui/button";

const Category = ({ assets, name }: TCategory) => {
  return (
    <div className="flexCenter p-4 flex-col bg-[#f2f2f2] dark:bg-main-hover-bg-dark flex-1">
      <img
        src={assets[0].url}
        alt="category_image"
        className="w-96 h-52 object-cover"
      />
      <Button variant={"outline"} className="w-full h-12">
        {name}
      </Button>
    </div>
  );
};

export default Category;
