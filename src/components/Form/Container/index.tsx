import { ErrorMessage } from "@hookform/error-message";
import styles from "./index.module.scss";
import { useFormContext } from "react-hook-form";

interface ContainerProps<T> {
	title?: string;
	name: keyof T;
	children: React.ReactNode;
}

export default function Container<T>({
	title,
	children,
	name,
}: ContainerProps<T>) {
	const {
		formState: { errors },
	} = useFormContext();

	return (
		<label className={styles.container}>
			<div>{title}</div>
			<div>
				{children}
				<ErrorMessage
					errors={errors}
					name={name as string}
					render={({ message }) => <p>{message}</p>}
				/>
			</div>
		</label>
	);
}
