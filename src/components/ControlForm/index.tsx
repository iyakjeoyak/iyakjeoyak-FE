import { Button } from "./Button";
import { FormEventHandler } from "react";
import { ImgInput } from "./ImgInput";
import ImgsInput from "./ImgsInput";
import { Input } from "./Input";
import { RadioButton } from "./RadioButton";
import StarRating from "./StarRating";
import TagBoard from "./TagBoard";
import TagButton from "./TagButton";
import { Textarea } from "./Textarea";
import styles from "@/components/Form/index.module.scss";

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
ControlForm.TagButton = TagButton;
ControlForm.TagBoard = TagBoard;
ControlForm.RadioButton = RadioButton;
ControlForm.Textarea = Textarea;
ControlForm.StarRating = StarRating;
ControlForm.ImgsInput = ImgsInput;
