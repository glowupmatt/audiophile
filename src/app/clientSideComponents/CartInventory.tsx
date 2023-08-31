import React from "react";
import ProductButton from "../libs/assetComponents/ProductButton";

type Props = {};

const CartInventory = (props: Props) => {
  return (
    <div className="flex justify-center items-center bg-white h-full w-full rounded-md">
      <section className="flex flex-col justify-between items-center h-full w-full">
        <div className="flex justify-between items-center">
          <h3>Cart: ItemsInCart</h3>
          <p>Remove All</p>
        </div>
        {/* Cart Item */}
        <div className="flex w-full justify-between">
          <div className="h-[4rem] w-[4rem]">
            <p>Image</p>
          </div>
          <div className="flex flex-col h-full justify-between">
            <p>Product Name</p>
            <p>Price</p>
          </div>
          <p>Quantity</p>
        </div>
        <div className="flex justify-center w-full">
          <p>Total Price</p>
          <p>4324324</p>
        </div>
        <div>
          <ProductButton>fdsafsda</ProductButton>
        </div>
      </section>
    </div>
  );
};

export default CartInventory;
