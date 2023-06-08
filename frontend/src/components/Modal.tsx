import React from "react"

interface ModalProps {
    visible: boolean
    setVisible: (newState: boolean) => void
    title: string
    controls: React.JSX.Element | React.JSX.Element[] | string
    children: React.JSX.Element | React.JSX.Element[] | string
}

const Modal = ({
    visible,
    setVisible,
    title,
    controls,
    children,
}: ModalProps) => {
    return (
        <>
            {visible ? (
                <>
                    <div className="text-black justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/* Header */}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    {/* Modal Title*/}
                                    <h3 className="text-3xl font-semibold">
                                        {title}
                                    </h3>

                                    {/* Close Button*/}
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setVisible(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>

                                {/* Body */}
                                <div className="relative p-6 flex-auto">
                                    {children}
                                </div>

                                {/* Footer / Controls */}
                                <div className="flex gap-4 items-center justify-start p-6 border-t border-solid border-slate-200 rounded-b">
                                    {controls}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default Modal
