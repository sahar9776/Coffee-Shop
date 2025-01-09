import DessertPageBanner from "@/Components/DessertPageBanner";
import ProductItem from "@/Components/ProductItem";
import { ProductList } from "@/Static/ProductList";

function Dessert() {
  const Dessertslist = ProductList.filter((item) => item.category == "dessert");
  return (
    <div className="max-w-full h-auto">
      <DessertPageBanner />

      {/* dessert List  */}
      <div className="container py-10">
        <h2 className="text-4xl font-semibold text-white border-b-2 border-white inline-block">
          Dessert List
        </h2>

        <div className="w-full h-auto text-center mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-5 [&>div:not(:first-child)]:mt-5 md:[&>div:not(:first-child)]:mt-0 py-10">
          {Dessertslist.map((item) => (
            <ProductItem item={item} key={item.id} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default Dessert;
