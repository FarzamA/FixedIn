export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';


export const openModal = (modal, id = null) => {
    document.getElementsByClassName('header')[0].style.zIndex = 0;

    return {
        type: OPEN_MODAL,
        modal,
        id
    }
};

export const closeModal = () => {
    document.getElementsByClassName('header')[0].style.zIndex = 10;

    return {
        type: CLOSE_MODAL
    }
}