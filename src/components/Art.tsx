import { featureLists, goodLists } from "../constants";

const Art = () => {
  return (
    <div
      id="art"
      className="flex-center flex-col min-h-dvh p-5 mt-20 relative radial-gradient"
    >
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade relative md:text-[20vw] text-8xl text-nowrap leading-none font-modern-negra text-center text-[#505050] mb-8">
          THE ART
        </h2>
        <div className="flex md:flex-row flex-col justify-between md:mb-16 md:mt-0 mt-40 gap-10">
          <ul className="space-y-4 will-fade">
            {goodLists.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src={"/images/check.png"} alt={"check"} />
                <span className="text-lg font-semibold">{item}</span>
              </li>
            ))}
          </ul>
          <div className="md:w-[60vw] w-full h-[50vh] md:h-[70vh] rounded-4xl overflow-hidden absolute top-0 md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2">
            <img
              src="/images/under-img.jpg"
              className="abs-center masked-img size-full object-contain"
              alt="Under Image"
            />
          </div>
          <ul className="space-y-4 will-fade">
            {featureLists.map((item, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src={"/images/check.png"} alt={"check"} />
                <span className="text-lg font-semibold">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Art;
