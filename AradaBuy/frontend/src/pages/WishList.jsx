import { useWishList } from '../context/WishListContext';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

const WishList = () => {
  const { WishList } = useWishList();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#2c3037] mb-4">
          Your WishList
        </h1>
        <p className="text-lg text-gray-600">
          {WishList.length} {WishList.length === 1 ? 'item' : 'items'} saved
        </p>
      </div>

      {WishList.length === 0 ? (
        <div className="text-center py-12">
          <FiHeart className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">Your WishList is empty</h3>
          <p className="mt-1 text-gray-500">Save items you love to purchase them later</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {WishList.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-md flex flex-col overflow-hidden border border-gray-200"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="h-48 w-full object-cover"
                />
                {product.onSale && (
                  <div className="absolute top-3 left-3 bg-[#CE542C] text-white text-xs font-semibold px-2 py-1 rounded-full">
                    SALE
                  </div>
                )}
              </div>
              
              <div className="flex-1 flex flex-col justify-between p-4">
                <div>
                  <span className="inline-block text-xs px-2 py-1 rounded-full bg-[#f5eee6] text-[#CE542C] font-semibold mb-2">
                    {product.classification}
                  </span>
                  <h3 className="font-semibold text-lg text-[#2c3037] mb-1">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-500">({product.reviewCount})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#CE542C] font-bold text-xl">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </div>
                <button className="mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-md font-semibold bg-[#CE542C] text-white hover:bg-[#a53e1e] transition-colors duration-200">
                  <FiShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;