import { useEffect, useRef } from 'react';
import { IconClose } from '../icons';
import './dialog.style.css'

export function Dialog({ isOpen, onClose, children }) {
    // Não buscar elementos no DOM dessa forma no React
    // const dialog = document.querySelector("dialog");
    // const showButton = document.querySelector("dialog + button");
    // const closeButton = document.querySelector("dialog button");

    // "Show the dialog" button opens the dialog modally
    // showButton.addEventListener("click", () => {
    //     dialog.showModal();
    // });

    const dialogRef = useRef(null)

    useEffect(() => {
        const dialog = dialogRef.current
        dialog?.addEventListener('close', onClose)
        return () => {
            dialog?.removeEventListener('close', onClose)
        }
    }, [onClose])

    useEffect(() => {
        if (isOpen) {
            openDialog()
        } else {
            closeDialog()
        }
    }, [isOpen])

    const openDialog = () => {
        dialogRef.current.showModal();
    };

    // "Close" button closes the dialog
    // closeButton.addEventListener("click", () => {
    //     dialog.close();
    // });

    const closeDialog = () => {
        dialogRef.current.close();
    };

    return (
        <>
            <dialog ref={dialogRef} className='dialog'>
                <div className='btn-close-wrapper'>
                    <button autoFocus onClick={onClose} className='btn-close'>
                        <IconClose />
                    </button>
                </div>
                {children}
            </dialog>
        </>
    )
}