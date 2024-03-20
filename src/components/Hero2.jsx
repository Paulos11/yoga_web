const Hero2 = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <h1 className="text-center pt-12 text-2xl font-bold pb-2">
        Technologies to buld
      </h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur consectetur <br />
        adipisicing elit. Ratione, voluptates?
      </p>
      <div className="flex flex-wrap  justify-evenly pb-[90px] pt-[80px] items-center ">
        <div>
          <img
            className="w-[150px]"
            src="https://static-00.iconduck.com/assets.00/react-icon-2048x1822-iy7h2x8y.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[150px]"
            src="https://static-00.iconduck.com/assets.00/vue-js-icon-2048x1755-wlgbvqu0.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[150px]"
            src="https://cdn.iconscout.com/icon/free/png-256/free-tailwind-css-5285308-4406745.png?f=webp"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[150px]"
            src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Hero2;
