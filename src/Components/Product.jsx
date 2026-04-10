import React, { use } from 'react'
import { Link, useNavigation } from 'react-router';
import { useDispatch } from "react-redux";

const Product = ({product,additem,removeitem}) => {

  const dispatch = useDispatch();
  const {thumbnail, description, price,discountPercentage}=product;
  return (
      <div
            // key={p.id}
            className="flex flex-col border border-gray-300 shadow-sm rounded-md p-1.5 transition-all relative overflow-hidden"
          >
            <Link to={`/product/${product.id}`} className="block">
              <div className="w-full bg-slate-50">
                <img
                  src={product.thumbnail}
                  className="w-full aspect-square object-cover object-top"
                />
              </div>
              <div className="py-4 px-2 text-left">
                <h6 className="text-sm sm:text-[15px] font-semibold text-slate-900 line-clamp-2">
                  {product.description}
                </h6>
                <div className="mt-4">
                  <p className="text-slate-900 font-semibold text-sm sm:text-[15px] break-words">
                    <span className="mr-1.5 ">{product.price}</span>
                    {product.discountPercentage}
                  </p>
                </div>
              </div>
            </Link>
            <div className="h-[78px]">
              <div className="flex flex-col items-center w-full absolute left-0 right-0 px-2 bottom-3">
                <button
                  // onClick={() => dispatch(additem(product))}
                 onClick={() => additem(product)}
                  type="button"
                  className="flex items-center justify-center gap-2 px-2 py-2 cursor-pointer rounded-md text-white text-sm sm:text-[15px] font-medium whitespace-nowrap border-0 outline-0 w-full bg-purple-700 hover:bg-purple-800"
                >
                  Add to Bag
                </button>
                <button
                  type="button"
                  className="pb-0.5 pt-3 cursor-pointer text-sm sm:text-[15px] text-slate-900 font-medium whitespace-nowrap outline-0 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    width="16px"
                    height="16px"
                    viewBox="0 0 66 66"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                  <span>Add to wishlist</span>
                </button>
              </div>
            </div>
          </div>
  )
}

export default Product