import { FormEventHandler } from "react";
import styles from "@/components/Form/index.module.scss";
import { Input } from "./Input";
import { Button } from "../Form/Button";
import { RadioButton } from "./RadioButton";
import TagButton from "./TagButton";
import TagBoard from "./TagBoard";
import { ImgInput } from "./ImgInput";

interface FormProps {
	children: React.ReactNode;
	className?: string;
	onSubmit: FormEventHandler<HTMLFormElement>;
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
ControlForm.TagButton = TagButton;
ControlForm.TagBoard = TagBoard;
ControlForm.RadioButton = RadioButton;
// ControlForm.Textarea = Textarea;
// ControlForm.StarRating = StarRating;
// ControlForm.ImgsInput = ImgsInput;
