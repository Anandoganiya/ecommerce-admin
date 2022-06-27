import React, { useEffect, useState } from "react";
import { useStatusContext } from "../context/ContextProvider";
import { FiCamera } from "react-icons/fi";
const EditProduct = () => {
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
          className="border w-full rounded shadow p-8"
          onSubmit={handleForm}
        >
          <h2 className="text-2xl border-b pb-4 font-extrabold text-black">
            Edit Product
          </h2>
          <div className="flex w-full justify-between">
            <div className="flex flex-col w-full">
              <div className="w-full  mt-4">
                <label
                  htmlFor="imgUpload"
                  className="text-xl font-semibold text-gray-500 cursor-pointer"
                >
                  <div className="rounded-full w-[3.5rem] flex justify-center items-center bg-gray-300 p-4 hover:bg-gray-500 hover:text-white ">
                    <FiCamera />
                  </div>
                </label>
                <input
                  className="invisible"
                  multiple
                  accept="image/png, image/jpg, image/gif, image/jpeg"
                  name="img1"
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
                  className="text-xl font-semibold text-gray-500"
                >
                  Product Name
                </label>
                <input
                  className="border outline-none w-full text-xl font-semibold text-gray-500 rounded-lg p-2"
                  type="text"
                  id="productName"
                  value={"snow"}
                  onChange={() => {}}
                />
              </div>

              <div className="w-full mb-4">
                <label
                  htmlFor="status"
                  className="text-xl font-semibold text-gray-500 mb-4"
                >
                  Category
                </label>
                <select
                  name=""
                  id="status"
                  className="border outline-none w-full text-xl font-semibold text-gray-500 rounded-lg p-2"
                  onChange={() => {}}
                >
                  <option value="active">Fish and Meat</option>
                  <option value="active">Drinks</option>
                </select>
              </div>
              <div className="w-full mb-4">
                <label
                  htmlFor="status"
                  className="text-xl font-semibold text-gray-500 mb-4"
                >
                  Product Type
                </label>
                <select
                  name=""
                  id="status"
                  className="border outline-none w-full text-xl font-semibold text-gray-500 rounded-lg p-2"
                  onChange={() => {}}
                >
                  <option value="active">Grocery</option>
                  <option value="active">Foods</option>
                </select>
              </div>
              <div className="w-full mb-4">
                <label
                  className="text-xl font-semibold text-gray-500 mb-4"
                  htmlFor="desc"
                >
                  Product Description
                </label>
                <textarea
                  className="border outline-none w-full text-xl font-semibold text-gray-500 rounded-lg p-2"
                  id="desc"
                  cols="20"
                  rows="2"
                ></textarea>
              </div>
              <div className="w-full mb-4">
                <label
                  className="text-xl font-semibold text-gray-500 mb-4"
                  htmlFor="unit"
                >
                  Unit (kg/pc/lb/ml/g...etc)
                </label>
                <input
                  className="border outline-none w-full text-xl font-semibold text-gray-500 rounded-lg p-2"
                  type="text"
                  id="unit"
                  value={26}
                  onChange={() => {}}
                />
              </div>
              <div className="w-full mb-4">
                <label
                  className="text-xl font-semibold text-gray-500 mb-4"
                  htmlFor="stock"
                >
                  Product Quantity
                </label>
                <input
                  className="border outline-none w-full text-xl font-semibold text-gray-500 rounded-lg p-2"
                  type="text"
                  id="stock"
                  value={26}
                  onChange={() => {}}
                />
              </div>
              <div className="w-full mb-4">
                <label
                  className="text-xl font-semibold text-gray-500 mb-4"
                  htmlFor="price"
                >
                  Product Price
                </label>
                <input
                  className="border outline-none w-full text-xl font-semibold text-gray-500 rounded-lg p-2"
                  type="text"
                  id="price"
                  value={26}
                  onChange={() => {}}
                />
              </div>
              <div className="w-full mb-4">
                <label
                  className="text-xl font-semibold text-gray-500 mb-4"
                  htmlFor="salePrice"
                >
                  Sale Price
                </label>
                <input
                  className="border outline-none w-full text-xl font-semibold text-gray-500 rounded-lg p-2"
                  type="text"
                  id="salePrice"
                  value={26}
                  onChange={() => {}}
                />
              </div>
              <div>
                <button className="rounded-lg py-4 px-8 bg-sky-400 text-semibold text-white text-xl">
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
