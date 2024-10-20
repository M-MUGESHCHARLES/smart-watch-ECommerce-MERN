import React from "react";
import { Item } from "../Item/Item";
import { useShop } from "../../ShopContext";

export default function RelatedProducts({category , name}) {
    const {products} =useShop();


    const relatedProducts = products
      .filter((p) => p.category === category && p.name !== name)
      .slice(0, 4);


  return (
    <div id="RelatedProducts" className="pt-4 pb-3">
      <div className="container mb-4">
        <h2 className="Shop-Heading"> Related Products</h2>
      </div>
      <div className="row container mx-auto my-4">
        {relatedProducts.map((p) => {
          return (
            <div key={p.id} className="col-6 col-md-4 col-lg-3 py-2 px-2">
              <Item
                name={p.name}
                image={p.image}
                description={p.description}
                price={p.price}
                old_price={p.old_price}
                bestSeller={p.bestSeller}
                colors={p.colors}
                category={p.category}
              />
            </div>
          );
        })}
      </div>
      <div className="light-bg-hr">
        <hr />
      </div>
    </div>
  );
}
