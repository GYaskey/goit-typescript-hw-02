import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ loadMore }) => {
  return (
    <div className={s.buttonBox}>
      <button type="button" onClick={loadMore} className={s.btn}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
