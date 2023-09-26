const CustomButton = ({ btnType, title, handleClick, styles }) => {
  return (
    <button
      type={btnType}
      className={`font-epilogue font-semibold text-[16px] leading-[26px] text-black min-h-[52px] px-4 rounded-[10px] bg-lime-200 hover:bg-lime-300 ${styles}`}
      onClick={handleClick}
      // disabled={yes === true ? true : false}
    >
      {title}
    </button>
  );
};

export default CustomButton;
