import { reviews } from "@/Constant";
import CustomerReviewsCard from "../components/common/CustomerReviewsCard";

const CustomerReviews = () => {
  return (
    <section className=" w-full min-h-screen  flex items-start justify-evenly py-12">
      <div className="flex items-center justify-evenly flex-col xl:w-4/5 max-xl:mx-6 gap-20">
        <div className="text-center">
          <h1 className="sm:text-5xl font-bold mb-4 text-3xl ">
            {" "}
            What Our
            <span className="text-primaryColor"> Customers </span>
            Say?
          </h1>
          <p className="text-grayText  lg:max-w-lg ">
            Hear genuine stories from our satisfied customers about
          </p>
          <p className="text-grayText  lg:max-w-lg mb-5">
            their exceptional experiences with us.
          </p>
        </div>
        <div className="w-full flex items-center justify-evenly md:flex-row flex-col gap-10">
          {reviews.map((item) => (
            <CustomerReviewsCard key={item.customerName} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
