// import { ColorRing } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader: React.FC = () => {
  return <div className={css.spinner} />;
};

// const Loader: React.FC = () => {
//   return (
//     <div className={css.loader}>
//       <ColorRing
//         visible={true}
//         height="80"
//         width="80"
//         ariaLabel="color-ring-loading"
//         wrapperStyle={{}}
//         wrapperClass="color-ring-wrapper"
//         colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
//       />
//     </div>
//   );
// };

// const Loader = () => {
//   return (
//     <>
//       <ColorRing
//         className={css.loader}
//         visible={true}
//         height="80"
//         width="80"
//         ariaLabel="color-ring-loading"
//         wrapperStyle={{}}
//         wrapperClass="color-ring-wrapper"
//         colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
//       />
//     </>
//   );
// };

export default Loader;
