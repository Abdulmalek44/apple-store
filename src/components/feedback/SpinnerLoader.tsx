const SpinnerLoader = ({ style }: { style?: string }) => {
  return (
    <div
      className={` ${style} animate-spin  w-5 h-5 rounded-full border-t-2 border-l-2 `}
    ></div>
  );
};

export default SpinnerLoader;
