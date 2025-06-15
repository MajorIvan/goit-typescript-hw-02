import css from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  onClick: () => void;
};

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.button}>
      Load More
    </button>
  );
};

// const LoadMoreBtn = ({ onClick }) => {
//     return (
//         <button onClick={onClick} className={css.button}>Load More</button>
//     );
// }

export default LoadMoreBtn;
