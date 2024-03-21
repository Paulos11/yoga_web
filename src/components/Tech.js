import { DiAndroid, DiJavascript, DiPython, DiKomodo } from "react-icons/di";

const Tech = () => {
  return (
    <div className="my-9 px-10 grid place-items-center grid-cols-auto-fit sm:gap-10 sm:py-1">
      <DiAndroid className="animate-spin" color="black" size={120} />
      <DiPython className="animate-bounce" color="black" size={120} />
      <DiJavascript
        className="hover:scale-125 transition-all duration-300"
        color="black"
        size={120}
      />
      <DiKomodo className="animate-pulse" color="black" size={120} />
    </div>
  );
};
export default Tech;
