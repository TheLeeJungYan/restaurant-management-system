import { useContext, useState } from "react";
import CustomerIcon from "../assets/icons/Customer";
import TableIcon from "../assets/icons/Table";
import { ProductContext } from "../context/ProductContext";
import { Cancel01Icon } from "hugeicons-react";
import Counter from "../components/Counter";
import {
  ShoppingBasketRemove03Icon
}from "hugeicons-react";
import "../css/basket.css";
const Basket: React.FC = () => {
  const productContext = useContext(ProductContext);
  const [customerOrTableFocus, setCustomerOrTableFocus] =
    useState<boolean>(false);
  if (productContext == undefined) {
    return <div>Loading...</div>;
  }

  const {
    tax,
    orderSelection,
    changeOrderSelection,
    customerOrTable,
    customerOrTableInput,
    basketProducts,
    getProImageUrl,
    removeProductFromBasket,
    changeQuantityOfProductInBasket,
    submit,
    customerOrTableError,
    setCustomerOrTableError,
    basketEmptyError
  } = productContext;

  return (
    <div className="w-112 h-full shrink-0 py-5 px-1">
      <div className="max-h-screen h-fit px-6 pt-3 pb-4 bg-white rounded-xl border border-gray-200 flex flex-col sticky top-0">
        <div className="head flex flex-col py-4 gap-2 ">
          <div className="text-2xl font-semibold font-nunito ">
            Current Order
          </div>
          <div className="flex flex-col font-inter text-sm">
            <div className="bg-gray-100 border  flex *:flex-1 *:flex *:items-center *:justify-center *:py-2 *:gap-2 *:transition-all *:rounded-md gap-2 py-1 font-semibold px-1 rounded-md shadow-sm ">
              <button
                className={`${
                  orderSelection == "Customer"
                    ? "bg-primaryColor text-white shadow-lg"
                    : "text-gray-400"
                }`}
                onClick={() => changeOrderSelection("Customer")}
              >
                <CustomerIcon
                  size={16}
                  color={`${orderSelection == "Customer" ? "#fff" : "#9ca3af"}`}
                />
                <span>Customer</span>
              </button>
              <button
                className={`${
                  orderSelection == "Table"
                    ? "bg-primaryColor text-white shadow-lg"
                    : "text-gray-400"
                }`}
                onClick={() => changeOrderSelection("Table")}
              >
                <TableIcon
                  size={16}
                  color={`${orderSelection == "Table" ? "#fff" : "#9ca3af"}`}
                />
                <span>Table</span>
              </button>
            </div>
            <div
              className={`mt-4 bg-white border shadow-sm rounded-lg w-2/3 flex *:py-3 overflow-hidden ${
                customerOrTableFocus || customerOrTableError
                  ? "ring-primaryColor/20 ring ring-opacity-50 border-primaryColor/50"
                  : ""
              }`}
              onClick={() => setCustomerOrTableFocus(true)}
              onBlur={() => setCustomerOrTableFocus(false)}
            >
              <div className="px-4 flex items-center justify-center border-r text-gray-500">
                {orderSelection && orderSelection == "Customer" ? (
                  <CustomerIcon size={16} color={"#555"} />
                ) : (
                  <TableIcon size={16} color={"#555"} />
                )}
              </div>
              <input
                type="text"
                className="flex-1 outline-0 px-2 truncate"
                value={customerOrTable || ""}
                onChange={(e) => {customerOrTableInput(e.target.value); setCustomerOrTableError(false)}}
              />
            </div>
            {customerOrTableError && <span className="font-poppins text-primaryColor text-xs mt-1">* {orderSelection} is required</span>}
          </div>
        </div>
        <div className="flex flex-col pb-4 overflow-auto" id="basketCont">
          {basketProducts.length == 0 && <div className={`flex-1  flex flex-col items-center py-10 transition-all duration-400 ${basketEmptyError?'text-primaryColor basketEmptyError':'text-gray-300'}`}>
            <ShoppingBasketRemove03Icon size={24}/>
            <span className="font-poppins mt-2 text-xs">No items</span></div>}
          {basketProducts &&
            basketProducts.map((bp) => {
              return (
                <div className="flex gap-4 py-2 basketItems" key={bp.ID} id={`b${bp.ID}`}>
                  <div className="shrink-0">
                    <img
                      src={getProImageUrl(bp.ID)}
                      alt=""
                      className="object-cover rounded-md h-20 w-20"
                    />
                  </div>
                  <div className="flex-1 flex flex-col overflow-x-hidden">
                    <div className="flex justify-between overflow-x-hidden shrink-0">
                      <div className="font-inter font-semibold text-lg flex-1 truncate">
                        {bp.NAME}
                      </div>
                      <button
                        className="shrink-0 hover:text-gray-500"
                        onClick={() => removeProductFromBasket(bp.ID)}
                      >
                        <Cancel01Icon size={14} />
                      </button>
                    </div>

                    <span className="font-poppins text-sm text-gray-400">
                      {bp.QTY} x RM{bp.PRICE}
                    </span>
                    <div className="font-poppins mt-auto flex justify-between items-end">
                      <span>RM{bp.TOTAL_PRICE}</span>
                      <Counter
                        id={bp.ID}
                        qty={bp.QTY}
                        changeQuantityOfProduct={
                          changeQuantityOfProductInBasket
                        }
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="py-2">
          <div
            id="subtotal"
            className="bg-gray-100 py-2 rounded-lg flex flex-col gap-2 px-4 *:flex *:justify-between *:items-center [&>div>div:first-child]:font-semibold [&>div>div:first-child]:text-gray-400 text-gray-800 [&>div>div:nth-child(2)]:font-poppins "
          >
            <div>
              <div>Subtotal</div>
              <div>
                RM{" "}
                {basketProducts
                  .reduce((acc, bp) => acc + bp.TOTAL_PRICE, 0)
                  .toFixed(2)}
              </div>
            </div>
            {/* <div>
              <div>Discount sales</div>
              <div>- RM 0.00</div>
            </div> */}
            <div>
              <div>Total Sales Tax</div>
              <div>
                RM
                {(
                  (basketProducts.reduce((acc, bp) => acc + bp.TOTAL_PRICE, 0) *
                    tax) /
                  100
                ).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
        <div
          id="total"
          className="flex justify-between items-center px-4 py-2 border-t text-2xl font-semibold font-inter"
        >
          <div>Total</div>
          <div>
            RM{" "}
            {(
              basketProducts.reduce((acc, bp) => acc + bp.TOTAL_PRICE, 0) +
              (basketProducts.reduce((acc, bp) => acc + bp.TOTAL_PRICE, 0) *
                tax) /
                100
            ).toFixed(2)}
          </div>
        </div>
        {basketEmptyError && <span className="font-poppins text-primaryColor text-xs mt-">* Basket is empty !</span>}
        <button className="bg-primaryColor text-white px-4 py-3 rounded-md font-bold text-xl mt-2" onClick={submit} >
          Submit
        </button>
      </div>
    </div>
  );
};
export default Basket;
