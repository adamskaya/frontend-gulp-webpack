import PopupMenu from './popup-menu';

class PopupTrigger extends HTMLElement {
	constructor() {
		super();
	}

	get popupMenu(): PopupMenu {
		return document.getElementById('drop-down-menu') as PopupMenu;
	}

	_onClick = (event: MouseEvent) => {
		this.popupMenu.triggerPopupMenu();
		event.stopPropagation();
		event.preventDefault();
	};
}

customElements.define('popup-trigger', PopupTrigger);
export default PopupTrigger;
