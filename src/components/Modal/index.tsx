import Close from "./UI/Close";
import Content from "./UI/Content";
import ModalRoot from "./UI/ModalRoot";
import Overlay from "./UI/Overlay";
import Trigger from "./UI/Trigger";

const Modal = Object.assign(ModalRoot, {
	Trigger,
	Content,
	Close,
	Overlay,
});

export default Modal;
