// import React from "react";
// import { useForm } from "react-hook-form";

// const GenSection = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => console.log(data);

//   return (
//     <div>
//       <form className="gen-form" onSubmit={handleSubmit(onSubmit)}>
//         <input
//           className="chord-input"
//           placeholder="Your chord line"
//           type="text"
//           {...register("CLineOne")}
//         />
//         <input
//           className="lyric-input"
//           placeholder="Your lyric line"
//           type="text"
//           {...register("LLineOne")}
//         />
        
//         <input
//           className="chord-input"
//           placeholder="Your chord line"
//           type="text"
//           {...register("CLineTwo")}
//         />
//         <input
//           className="lyric-input"
//           placeholder="Your lyric line"
//           type="text"
//           {...register("LLineTwo")}
//         />
        
//         <input
//           className="chord-input"
//           placeholder="Your chord line"
//           type="text"
//           {...register("CLineThree")}
//         />
//         <input
//           className="lyric-input"
//           placeholder="Your lyric line"
//           type="text"
//           {...register("LLineThree")}
//         />

//         <button className=" bg-blue-600 rounded-md text-white py-2 px-4 mx-auto table my-5">
//             Add to board
//         </button>
//       </form>
//     </div>
//   );
// };

// export default GenSection;
