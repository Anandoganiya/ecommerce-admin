import React, { useRef, useEffect, useState } from "react";
import { useStatusContext } from "../context/ContextProvider";
import { FiCamera } from "react-icons/fi";
const AddProduct = () => {
  const { activeMenu } = useStatusContext();
  const [productImageUpload, setProductImageUpload] = useState([]);
  const [imageURLS, setImageURLs] = useState([]);
  useEffect(() => {
    if (productImageUpload.length < 1) return;
    const newImageUrls = [];
    productImageUpload.forEach((image) =>
      newImageUrls.push(URL.createObjectURL(image))
    );
    setImageURLs(newImageUrls);
  }, [productImageUpload]);
  const handleForm = (e) => {
    e.preventDefault();
  };
  const handleProductImages = (e) => {
    setProductImageUpload([...productImageUpload, ...e.target.files]);
  };
  const removeSelectedImage = (imgSrc) => {
    const filterImageURlS = imageURLS.filter((item) => item !== imgSrc);
    const filterProductImageUpload = productImageUpload.filter((item) => {
      if (URL.createObjectURL(item) === imgSrc) {
        return item;
      }
    });
    setProductImageUpload(filterProductImageUpload);
    setImageURLs(filterImageURlS);
  };

  return (
    <div
      className={`${
        activeMenu ? "ml-72" : "w-full"
      }  mt-4 flex justify-center  gap-1`}
    >
      <div className="w-full flex justify-center m-4">
        <form
          className="rounded-xl border-gray-dark shadow-2xl w-full p-8"
          onSubmit={handleForm}
        >
          <h2 className="text-2xl border-b-2 border-b-gray-medium  pb-4 font-extrabold text-black">
            Add Product
          </h2>
          <div className="flex w-full justify-between">
            <div className="flex flex-col w-full">
              <div className="w-full  mt-4">
                <label
                  htmlFor="imgUpload"
                  className="text-xl font-semibold text-white cursor-pointer"
                >
                  <div className="rounded-full w-[3.5rem] flex justify-center items-center bg-gray p-4 hover:bg-gray-medium hover:text-white ">
                    <FiCamera />
                  </div>
                </label>
                <input
                  className="invisible"
                  multiple
                  accept="image/png, image/jpg, image/gif, image/jpeg"
                  id="imgUpload"
                  type="file"
                  onChange={handleProductImages}
                />
              </div>
              <div className="mb-2">
                <div className="w-[50%]  flex gap-1">
                  {imageURLS.map((imageSrc) => (
                    <img
                      onClick={() => removeSelectedImage(imageSrc)}
                      key={imageSrc}
                      className="w-[6rem] cursor-pointer object-cover border border-black rounded h-[4rem]"
                      src={imageSrc}
                      alt="product image"
                    />
                  ))}
                </div>
              </div>
              <div className="w-full mb-4">
                <label
                  htmlFor="productName"
                  className="mr-2  text-xl font-extrabold text-gray-medium"
                >
                  Product Name
                </label>
                <input
                  className="border outline-none w-full text-xl font-semibold text-gray-dark rounded-lg p-2"
                  type="text"
                  id="productName"
                  value={"snow"}
                  onChange={() => {}}
                />
              </div>

              <div className="w-full mb-4">
                <label
                  htmlFor="status"
                  className="mr-2  text-xl font-extrabold text-gray-medium"
                >
                  Category
                </label>
                <select
                  name=""
                  id="status"
                  className="border outline-none w-full text-xl font-semibold text-gray-dark rounded-lg p-2"
                  onChange={() => {}}
                >
                  <option value="active">Fish and Meat</option>
                  <option value="active">Drinks</option>
                </select>
              </div>
              <div className="w-full mb-4">
                <label
                  htmlFor="status"
                  className="mr-2  text-xl font-extrabold text-gray-medium"
                >
                  Product Type
                </label>
                <select
                  name=""
                  id="status"
                  className="border outline-none w-full text-xl font-semibold text-gray-dark rounded-lg p-2"
                  onChange={() => {}}
                >
                  <option value="active">Grocery</option>
                  <option value="active">Foods</option>
                </select>
              </div>
              <div className="w-full mb-4">
                <label
                  className="mr-2  text-xl font-extrabold text-gray-medium"
                  htmlFor="desc"
                >
                  Product Description
                </label>
                <textarea
                  className="border outline-none w-full text-xl font-semibold text-gray-dark rounded-lg p-2"
                  id="desc"
                  cols="20"
                  rows="2"
                ></textarea>
              </div>
              <div className="w-full mb-4">
                <label
                  className="mr-2  text-xl font-extrabold text-gray-medium"
                  htmlFor="unit"
                >
                  Unit (kg/pc/lb/ml/g...etc)
                </label>
                <input
                  className="border outline-none w-full text-xl font-semibold text-gray-dark rounded-lg p-2"
                  type="text"
                  id="unit"
                  value={26}
                  onChange={() => {}}
                />
              </div>
              <div className="w-full mb-4">
                <label
                  className="mr-2  text-xl font-extrabold text-gray-medium"
                  htmlFor="stock"
                >
                  Product Quantity
                </label>
                <input
                  className="border outline-none w-full text-xl font-semibold text-gray-dark rounded-lg p-2"
                  type="text"
                  id="stock"
                  value={26}
                  onChange={() => {}}
                />
              </div>
              <div className="w-full mb-4">
                <label
                  className="mr-2  text-xl font-extrabold text-gray-medium"
                  htmlFor="price"
                >
                  Product Price
                </label>
                <input
                  className="border outline-none w-full text-xl font-semibold text-gray-dark rounded-lg p-2"
                  type="text"
                  id="price"
                  value={26}
                  onChange={() => {}}
                />
              </div>
              <div className="w-full mb-4">
                <label
                  className="mr-2  text-xl font-extrabold text-gray-medium"
                  htmlFor="salePrice"
                >
                  Sale Price
                </label>
                <input
                  className="border outline-none w-full text-xl font-semibold text-gray-dark rounded-lg p-2"
                  type="text"
                  id="salePrice"
                  value={26}
                  onChange={() => {}}
                />
              </div>
              <div>
                <button className="rounded-lg flex justify-between  gap-1 hover:bg-blue-light items-center px-4 py-2 bg-blue font-semibold text-lg text-white">
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
