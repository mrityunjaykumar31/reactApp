import style from './Modal.module.css';
import reactDom from 'react-dom';

const Backdrop = props => {
    return <div className={style.backdrop}></div>
}

const ModalOverlay = props => {
    return (
        <div className={style.modal}>
            <div className={style.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <>
            {reactDom.createPortal(<Backdrop />, portalElement)}
            {reactDom.createPortal(
                <ModalOverlay>
                    {props.children}
                </ModalOverlay>, portalElement)}

        </>
    )
}

export default Modal