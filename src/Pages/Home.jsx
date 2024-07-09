import IconArrowRight from "../Components/IconRight";

function Home() {
  return (
    <div>
      <section className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-7 bg-gradient-to-r from-amber-50 to-orange-300">
        <div className="w-4/6 ml-4 text-center md:w-2/6 md:text-left">
          <div className="flex justify-center text-4xl md:justify-normal">
            <h1 className="pb-5 font-bold  text-transparent mr-2 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text">
              Enjoy The Slice{" "}
            </h1>
            <h1>🍕</h1>
          </div>

          <p className="pb-4 text-[#6b7280]">
            The Pizza app let's you order your favorite pizza from comfort of
            your home. best pizza in the town
          </p>
          <button className="py-2 px-4 flex items-center text-white bg-orange-500 rounded-md hover:bg-orange-600 group">
            Order Now
            <span className="inline-block
             ml-3 transition-transform ease-in-out group-hover:translate-x-2">
              <IconArrowRight />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
