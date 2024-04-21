import { MouseEventHandler } from "react";

interface ButtonTrackerProps {
	click?: MouseEventHandler<HTMLButtonElement>;
}

type ComponentEvents = {
	Button: ButtonTrackerProps;
};

const cancelEvent = {
	Button: {
		click: false,
	},
};

export const Events: ComponentEvents = {
	Button: {
		click: (e: React.MouseEvent<HTMLButtonElement>) => {
			if (cancelEvent.Button.click) return;
			console.log("button clicked", e);
		},
	},
};
