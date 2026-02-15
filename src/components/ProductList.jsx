import ProductItem from "./ProductItem";

function ProductList({ products }) {
  return (
    <section className="mt-20">

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
        
        <div>
          <h2 className="text-3xl font-bold text-slate-800">
            Explore Products
          </h2>
          <p className="text-slate-500 mt-1">
            Discover trending items picked just for you
          </p>
        </div>

        {/* result count */}
        <span className="text-sm text-slate-500 bg-slate-100 px-4 py-2 rounded-xl">
          {products.length} products found
        </span>

      </div>

      {/* Empty State */}
      {products.length === 0 ? (
        <div className="text-center py-20">
          <h3 className="text-2xl font-semibold text-slate-700">
            No products found 😕
          </h3>
          <p className="text-slate-500 mt-2">
            Try searching something else
          </p>
        </div>
      ) : (

        /* Products Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 animate-fadeIn">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>

      )}
    </section>
  );
}

export default ProductList;
