import IconArrowRight from "../Components/IconRight";
import PizzaImage from "../assets/IMG/pizza.png";
import CookingImage from "../assets/IMG/cooking.jpg";
import OrderImage from "../assets/IMG/order-food.png";
import DeliveryImage from "../assets/IMG/pickup-van-.png";
import CustomerImage from "../assets/IMG/customer.png";
import IconPatchCheck from "../Components/Icons/IconPatchCheck";
import Layout from "../Layout/Layout";
function Home() {
  return (
    <Layout>
    <div>
      {/* hero-section with Main Image */}
      <section className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-7 bg-gradient-to-r from-amber-50 to-orange-300">
        <div className="w-4/6 ml-4 text-center md:w-2/6 md:text-left">
          <div className="flex justify-center text-4xl md:justify-normal">
            <h1 className="pb-5 font-bold  text-transparent mr-2 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text">
              Enjoy The Slice{" "}
            </h1>
            <h1>🍕</h1>
          </div>
          {/* Some text */}
          <p className="pb-4 text-[#6b7280]">
            The Pizza app let's you order your favorite pizza from comfort of
            your home. best pizza in the town
          </p>
          {/* Button */}
          <button className="py-2 px-4 flex items-center text-white bg-orange-500 rounded-md hover:bg-orange-600 group">
            Order Now
            {/* Right Arrow Icon */}
            <span
              className="inline-block
             ml-3 transition-transform ease-in-out group-hover:translate-x-2"
            >
              <IconArrowRight />
            </span>
          </button>
        </div>
        {/* Main Image */}
        <div>
          <img src={PizzaImage} alt="Pizza" width={450} height={450} />
        </div>
      </section>



      {/* Services Section */}
      <section className=" py-4 mt-6 bg-gradient-to-r from-amber-50 to-orange-300">
        <div className="container flex flex-col md:flex-row">
          {/* Image Cooking  Div */}
          <div className="flex flex-col justify-center items-center rounded-lg lg:w-1/2">
            <img
              src={CookingImage}
              alt="Cooking"
              srcset=""
              width={400}
              // height={}
              className=" rounded-lg"
            />
          </div>

          <div className="text-center flex flex-col flex-wrap lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <div>
                <h2 className=" mb-2 text-5xl font-extrabold text-transparent bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text">
                  Cooked by the best <br />
                  Chefs in the World
                </h2>
                <p className=" text-base leading-relaxed text-[#6B7280]">
                  there are many benefits regarding to that but the main one
                  are:
                </p>
              </div>
            </div>

            <div className=" w-full p-1">
              <div className="flex items-center h-full p-2 text-2xl rounded">
                <IconPatchCheck className="text-orange-400 w-10 h-10 mr-5" />
                <span className="font-bold">Perfect taste</span>
              </div>
            </div>
            <div className=" w-full p-1">
              <div className="flex items-center h-full p-2 text-2xl rounded">
                <IconPatchCheck className="text-orange-400 w-10 h-10 mr-5" />
                <span className="font-bold">Prepaierd quickely</span>
              </div>
            </div>
            <div className=" w-full p-1">
              <div className="flex items-center h-full p-2 text-2xl rounded">
                <IconPatchCheck className="text-orange-400 w-10 h-10 mr-5" />
                <span className="font-bold">Food hygeine guanrateed</span>
              </div>
            </div>

            <div className="px-5 py-4 mx-auto">
              <div className="flex justify-center py-4">
                <div className="inline-flex w-16 h-2  rounded-full bg-orange-400"></div>
              </div>

              <div className=" flex flex-wrap space-y-6 md:space-y-0">
                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                  <div className="inline-flex items-center justify-center w-20 h-20 flex-shrink-0 mb-5 bg-yellow-100 rounded-full">
                    <img src={OrderImage} width={40} />
                  </div>

                  <div className="flex-grow">
                    <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                      Order Now
                    </h2>
                    <p>
                      {" "}
                      As easy as 1 2 3 Just select your favorite pizza and order
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                  <div className="inline-flex items-center justify-center w-20 h-20 flex-shrink-0 mb-5 bg-yellow-100 rounded-full">
                    <img src={DeliveryImage} width={40} />
                  </div>

                  <div className="flex-grow">
                    <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                      Fast Delivery
                    </h2>
                    <p>
                      {" "}
                      As easy as 1 2 3 Just select your favorite pizza and order
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                  <div className="inline-flex items-center justify-center w-20 h-20 flex-shrink-0 mb-5 bg-yellow-100 rounded-full">
                    <img src={CustomerImage} width={40} />
                  </div>

                  <div className="flex-grow">
                    <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                      Enjoy Food
                    </h2>
                    <p>
                      {" "}
                      As easy as 1 2 3 Just select your favorite pizza and order
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Map & Location */}
      <section>



      </section>
    </div>
    </Layout>
  );
}

export default Home;
