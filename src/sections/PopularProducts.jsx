import { products } from "../constants";
import { star } from "../assets/icons/index";

function PopularProducts() {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-palanquin  text-4xl font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="mt-2 font-montserrat text-slate-gray lg:max-w-lg">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="mt-16 grid gap-14 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((shoe, index) => (
          <div
            key={index + "a"}
            className="flex w-full flex-1 flex-col max-sm:w-full"
          >
            <div>
              <img
                src={shoe.imgURL}
                alt="Products"
                className="h-[280px] w-[280px]"
              />
            </div>
            <div className="mt-8 flex flex-col justify-start gap-2.5">
              <div className="flex flex-row gap-2">
                <img src={star} alt="rating" width={24} height={24} />
                <h1 className="font-montserrat text-xl leading-normal">
                  (4.5)
                </h1>
              </div>
              <h1 className="font-palanquin text-2xl font-semibold leading-normal">
                {shoe.name}
              </h1>
              <p className="font-montserrat font-semibold text-coral-red">
                {shoe.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default PopularProducts;
