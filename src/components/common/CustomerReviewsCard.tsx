import Star from "@/assets/svg/star.svg?react";

interface CustomerReviewsCardProps {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}

const CustomerReviewsCard = ({ ...review }: CustomerReviewsCardProps) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <img
        src={review.imgURL}
        alt={review.imgURL}
        className="rounded-full"
        width={150}
      />
      <p className="text-grayText max-w-xs text-center p-3">
        {review.feedback}
      </p>
      <div className="flex items-center text-primaryColor gap-2">
        <span>
          <Star className="w-5 h-5" />
        </span>
        <h5 className="text-grayText">({review.rating})</h5>
      </div>
      <h2 className="font-bold text-2xl">{review.customerName}</h2>
    </div>
  );
};

export default CustomerReviewsCard;
