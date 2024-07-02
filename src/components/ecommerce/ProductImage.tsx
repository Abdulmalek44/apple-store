import { useNavigate } from "react-router-dom";

type ProductImageProps = {
  url: string;
  imageSize?: string;
  id?: string;
};

const ProductImage = ({ url, imageSize, id }: ProductImageProps) => {
  const navigate = useNavigate();
  return (
    <div
      className={`flexCenter p-4 flex-col bg-main-hover-bg hover:bg-gray-200 duration-300
       grid-cols-subgrid dark:bg-main-hover-bg-dark dark:hover:bg-[#222224] lg:col-span-3 cursor-pointer`}
    >
      <img
        src={url}
        alt="category_image"
        className={`w-96 h-52 object-contain ${imageSize} `}
        onClick={() => navigate(`/shop/product/${id}`)}
      />
    </div>
  );
};

export default ProductImage;
