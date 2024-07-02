import HeroIamge from "@/assets/image/hero-mobile.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full h-4/5 mb-10">
      <div className="max-w-6xl mx-auto flexBetween  max-lg:flex-col ">
        <div className="flexCenter items-start flex-col max-xl:mt-12 ml-4 ">
          <h3 className="lg:text-6xl text-5xl max-w-2xl font-bold lg:max-w-xl mb-5">
            Unleash Innovation in Every Byte.
          </h3>
          <h4 className="text-2xl mb-5">
            Explore a World of Cutting-Edge Tech
          </h4>
          <Button onClick={() => navigate("/shop")}>Shop now</Button>
        </div>
        <img
          src={HeroIamge}
          alt="hero_iamge"
          className="lg:max-w-[39rem] object-cover "
        />
      </div>
    </section>
  );
};

export default Hero;
