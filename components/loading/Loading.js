import Lottie from "react-lottie";
import * as animationData from "../../public/loading.json";
import classes from "./Loading.module.css";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={classes.loading}>
      <Lottie options={defaultOptions} height={150} width={150} />
    </div>
  );
};

export default Loading;
