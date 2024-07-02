import deals from "@/assets/image/goning-deals.svg";
import { CountdownTimer } from "@/components/feedback";
import { Button } from "@/components/ui/button";

const OnGoingDeals = () => {
  return (
    <section className="w-full min-h-screen flexCenter flex-col max-xl:mb-12">
      <div className="max-w-6xl w-full mx-auto flexBetween max-xl:flex-col gap-y-5 p-4">
        <div className="flex gap-y-6 flex-col flex-1 ">
          <h1 className="text-3xl font-semibold">Deals of the Month</h1>
          <p className="max-w-xl">
            Get ready for a shopping experience like never before with our Deals
            Of the Month! Every purchase comes with exclusive perks and offers,
            making this month a celebration of savvy choices and amazing deals.
            Don't miss out! 🎁🛒
          </p>
          <p className="max-w-xl">
            Hurry, these amazing deals won't last long! Treat yourself or find
            the perfect gift for your loved ones. Make this month memorable with
            our exclusive offers and enjoy the savings! ✨🛍️
          </p>
          <CountdownTimer />
          <Button className="lg:w-fit ">View Products</Button>
        </div>
        <img
          src={deals}
          alt="deals"
          className="object-contain h-[26rem] w-[26rem]"
        />
      </div>
    </section>
  );
};

export default OnGoingDeals;
