import React from "react";
import CustomButton from "./CustomButton";

const Modal = ({ showModal, onShowModal, error }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-500 ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#eaeaf3] outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={onShowModal}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto mx-5">
                  <p className="my-4 text-lg leading-relaxed px-5">{error}</p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 rounded-b">
                  <CustomButton
                    btnType="button"
                    title="Close"
                    styles="w-full "
                    handleClick={onShowModal}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
