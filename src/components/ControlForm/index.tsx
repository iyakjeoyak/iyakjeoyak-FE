import { FormEventHandler } from "react";
import styles from "@/components/Form/index.module.scss";
import { Input } from "./Input";
import { RadioButton } from "./RadioButton";
import { ImgInput } from "./ImgInput";
import { Button } from "./Button";

interface FormProps {
	children: React.ReactNode;
	className?: string;
	onSubmit?: FormEventHandler<HTMLFormElement>;
}

export const ControlForm = ({ children, className, onSubmit }: FormProps) => {
	return (
		<form className={`${styles.container} ${className}`} onSubmit={onSubmit}>
			{children}
		</form>
	);
};

ControlForm.Input = Input;
ControlForm.Button = Button;
ControlForm.ImgInput = ImgInput;
ControlForm.RadioButton = RadioButton;
// ControlForm.TagButton = TagButton;
// ControlForm.TagBoard = TagBoard;
// ControlForm.Textarea = Textarea;
// ControlForm.StarRating = StarRating;
// ControlForm.ImgsInput = ImgsInput;
