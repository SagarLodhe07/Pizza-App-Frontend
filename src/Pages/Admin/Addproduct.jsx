import { useState } from "react";
import Layout from "../../Layout/Layout";
import FoodSVG from "../../assets/IMG/food.svg";
function AddProduct() {
  // const [product,setproduct] =useState({
    
  // })
  return (
    <Layout>
      <section className="py-12">
        <div className="flex items-center justify-center px-5">
          {/* Div For Side SVG */}
          <div className="md:w-1/2">
            <img src={FoodSVG} alt="" srcset="" />
          </div>

          {/* Div For Form*/}
          <div className="max-w-md md:w-2/6 mx-auto p-7 bg-white mt-8">
            <h1 className="mb-4 font-semibold text-2xl">Add Product</h1>
            <form>
              <div className="mb-4">
                {/* Label */}
                <label
                  htmlFor="productName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="productName"
                  required
                  minLength={3}
                  maxLength={20}
                  id="productName"
                  className="mt-1 p-2 w-full border
               border-gray-300 rounded-md 
               focus:outline-none focus:ring-indigo-500
                focus:border-indigo-500 
                sm:text-sm"
                />
              </div>
              <div className="mb-4">
                {/* Label */}
                <label
                  htmlFor="descripition"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <input
                  type="text"
                  name="descripition"
                  id="descripition"
                  className="mt-1 p-2 w-full border
               border-gray-300 rounded-md 
               focus:outline-none focus:ring-indigo-500
                focus:border-indigo-500 
                sm:text-sm"
                />
              </div>
              <div className="mb-4">
                {/* Label for Quantity */}
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  required
                  id="quantity"
                  className="mt-1 p-2 w-full border
               border-gray-300 rounded-md 
               focus:outline-none focus:ring-indigo-500
                focus:border-indigo-500 
                sm:text-sm"
                />
              </div>
              <div className="mb-4">
                {/* Label */}
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  required
                  id="price"
                  className="mt-1 p-2 w-full border
               border-gray-300 rounded-md 
               focus:outline-none focus:ring-indigo-500
                focus:border-indigo-500 
                sm:text-sm"
                />
              </div>
              {/* Label */}
              <div className="mb-2">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select Category
                </label>
                <select
                  name="category"
                  id="category"
                  className="mt-1 p-2 w-full border
               border-gray-300 rounded-md 
               focus:outline-none focus:ring-indigo-500
                focus:border-indigo-500 
                sm:text-sm"
                >
                  <option value="veg">Veg</option>
                  <option value="non-veg">Drinks</option>
                  <option value="drinks">Non-Veg</option>
                  <option value="sides">Sides</option>
                </select>
              </div>
              {/* Image Upload */}
              <div className="mb-4">
                {/* Label */}
                <label
                  htmlFor="productImage"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select Image{" "}
                  <span className="text-red-500">(.jpeg ,.jpg ,.png)</span>
                </label>
                <input
                  type="file"
                  name="productImage"
                  required
                  accept=".jpg, .png, .jpeg"
                  id="productImage"
                  className="mt-1 p-2 w-full border
               border-gray-300 rounded-md 
               focus:outline-none focus:ring-indigo-500
                focus:border-indigo-500 
                sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white w-full p-2 rounded-md"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
export default AddProduct;
