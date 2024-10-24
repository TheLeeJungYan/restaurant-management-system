// import React, { useRef, useState, useContext, useEffect } from "react";
// import "../css/menu.css";
// import DishIcon from "../assets/icons/dish.svg";
// import Counter from "../components/Counter";
// import BasketBtn from "../components/BasketBtn";
// import { ArrowLeftDoubleIcon, ArrowRightDoubleIcon } from "hugeicons-react";
// import { BasketContext } from "../App";
// interface Product {
//   id: number;
//   name: string;
//   img: string;
//   price: number;
//   type: string;
// }
// interface props {
//   products: Product[];
// }

// const Menu: React.FC<props> = ({ products }) => {
//   const [leftIconShow, setLeftIconShow] = useState<boolean>(false);
//   const [rightIconShow, setRightIconShow] = useState<boolean>(false);
//   const tabBox = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const checkingTabBoxSize: () => void = () => {
//       if (tabBox.current!.clientWidth >= tabBox.current!.scrollWidth) {
//         setRightIconShow(false);
//       } else {
//         setRightIconShow(true);
//       }
//     };
//     checkingTabBoxSize();
//     window.addEventListener("resize", checkingTabBoxSize);
//     return () => {
//       window.removeEventListener("resize", checkingTabBoxSize);
//     };
//   }, []);
//   const basketContext = useContext(BasketContext);
//   if (!basketContext) {
//     return;
//   }

//   const { addToQuantities, addToBasket } = basketContext;

//   const uniqueTypes: string[] = [
//     ...new Set(products.map((product) => product.type)),
//   ];
//   const getImageUrl: (name: string) => string = (name) => {
//     return new URL(`../assets/icons/${name}.svg`, import.meta.url).href;
//   };

//   const getProductImageUrl: (id: number) => string = (id) => {
//     return new URL(`../assets/products/${id}.jpg`, import.meta.url).href;
//   };

//   const handleIcons: () => void = () => {
//     const scrollValue: number = tabBox.current!.scrollLeft;
//     const maxScrollWidth: number =
//       tabBox.current!.scrollWidth - tabBox.current!.clientWidth;

//     if (scrollValue > 0) {
//       setLeftIconShow(true);
//     } else {
//       setLeftIconShow(false);
//     }

//     if (scrollValue >= maxScrollWidth) {
//       setRightIconShow(false);
//     } else {
//       setRightIconShow(true);
//     }
//   };

//   const slideRight: () => void = () => {
//     tabBox.current!.scrollLeft += 300;
//   };

//   const slideLeft: () => void = () => {
//     tabBox.current!.scrollLeft -= 300;
//   };
//   const tabScroll: () => void = () => {
//     handleIcons();
//   };
//   const basketBtnClick: (id: number) => void = (id) => {
//     addToBasket(id);
//   };
//   return (
//     <div className="flex-1 flex flex-col py-5  w-full overflow-x-hidden">
//       <span className="font-nunito font-black text-gray-700 uppercase text-3xl px-3">
//         menu
//       </span>

//   <div id="cat" className="flex mt-2 w-full items-center  relative">
//     <div className={`icon ${leftIconShow ? "flex" : "hidden"}`}>
//       <div
//         className="iconWrapper bg-white rounded-full px-2 py-2 bg-white shadow-lg text-gray-500 cursor-pointer ml-2"
//         onClick={slideLeft}
//       >
//         <ArrowLeftDoubleIcon size={20} />
//       </div>
//     </div>
//     <div
//       ref={tabBox}
//       id="tabBox"
//       className="flex items-center overflow-x-hidden gap-2 px-3 py-3"
//       onScroll={tabScroll}
//     >
//       <div
//         className="capitalize font-poppins font-semibold w-fit shrink-0
//                              text-sm rounded-full  px-4 py-2 bg-primaryColor text-white cursor-pointer shadow-md shadow-primaryColor flex gap-2"
//       >
//         <img
//           src={DishIcon}
//           className="w-4 h-4 object-contain flex-1 shrink-0"
//         ></img>
//         <span className="flex-1 shrink-0">All</span>
//       </div>
//       {uniqueTypes.map((type, index) => {
//         return (
//           <div
//             key={index}
//             className={`
//                             capitalize font-poppins font-semibold shrink-0
//                              text-sm rounded-full px-4 py-2
//                             cursor-pointer  bg-gray-200 text-gray-700 hover:bg-gray-300  transition-all flex gap-2`}
//           >
//             <img
//               src={getImageUrl(type)}
//               className="w-4 h-4 object-contain"
//             ></img>
//             <span>{type}</span>
//           </div>
//         );
//       })}
//     </div>
//     <div className={`icon ${rightIconShow ? "flex" : "hidden"}`}>
//       <div
//         className="iconWrapper  rounded-full px-2 py-2 bg-white shadow-lg text-gray-500 border cursor-pointer mr-2"
//         onClick={slideRight}
//       >
//         <ArrowRightDoubleIcon size={20} />
//       </div>
//     </div>
//   </div>
//       <div id="productCont" className="flex flex-row flex-wrap px-3 mt-2 ">
//         {products.map((p, index) => {
//           return (
//             <div key={index} className="basis-1/3 px-2 py-2 shrink-0">
//               <div className="product bg-white flex flex-col overflow-hidden rounded-xl border cursor-pointer hover:shadow-lg h-full transition-all duration-500">
//                 <div className="overflow-hidden">
//                   <img
//                     src={getProductImageUrl(p.id)}
//                     className="w-full object-cover h-60 productImg"
//                   ></img>
//                 </div>
//                 <div className="flex flex-col px-4 py-2">
//                   <div className="flex mt-1">
//                     <span className="font-semibold font-inter text-xl text-gray-600 ">
//                       {p.name}
//                     </span>
//                   </div>
//                   <div className="flex bg-gray rounded-lg px-3 py-1 bg-gray-100 w-fit capitalize font-poppins  font-semibold  text-gray-600 text-sm">
//                     {p.type}
//                   </div>
//                   <div className="flex font-poppins items-center gap-2 text-gray-500 price mt-3">
//                     RM{p.price}
//                   </div>

//                   <div className="flex justify-between items-center">
//                     <Counter id={p.id} addToQuantities={addToQuantities} />
//                     <BasketBtn basketBtnClick={basketBtnClick} id={p.id} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Menu;
