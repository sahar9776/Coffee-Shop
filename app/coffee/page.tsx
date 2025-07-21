import CoffeePageBanner from "@/Components/CoffeePageBanner";
import ProductItem from "@/Components/ProductItem";
import { ProductList } from "@/Static/data";

function CoffeePage() {
  const Coffees = ProductList.filter((item) => item.category == "coffee");
  return (
    <div className="max-w-full text-white md:py-10">
      <div className="container mx-auto">
        <CoffeePageBanner />

        {/* coffee List  */}
        <div className="w-full">
          <h2 className="text-4xl font-semibold border-b-2 border-white inline-block">
            Coffee List
          </h2>

          <div className="w-full h-auto text-center mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-5 [&>div:not(:first-child)]:mt-5 md:[&>div:not(:first-child)]:mt-0 py-10 ">
            {Coffees.map((item) => (
              <ProductItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoffeePage;
