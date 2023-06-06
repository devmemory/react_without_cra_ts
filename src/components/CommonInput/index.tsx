import React from "react";
import inputStyle from "./input.module.css";

const BorderEnum = {
	none: "none",
	underline: "underline",
	outline: "outline",
};

const TextAlignEnum = {
	center: "center",
	left: "left",
	right: "right",
};

type BorderType = keyof typeof BorderEnum;
type TextAlignType = keyof typeof TextAlignEnum;

type InputProps = {
	type: string;
	placeHolder?: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	disabled?: boolean;
	border?: BorderType;
	borderStyle?: string;
	textAlign?: TextAlignType;
	value?: any;
	maxLength?: number;
};

const CommonInput = (props: InputProps) => {
	let styles: Object;

	const borderStyle = props.borderStyle ?? "1px solid var(--shadow-color)";

	switch (props.border) {
		case BorderEnum.underline:
			styles = {
				"--border-top": "none",
				"--border-left": "none",
				"--border-right": "none",
				"--border-bottom": borderStyle,
			};
			break;
		case BorderEnum.outline:
			styles = {
				"--border-top": borderStyle,
				"--border-left": borderStyle,
				"--border-right": borderStyle,
				"--border-bottom": borderStyle,
			};
			break;
		case BorderEnum.none:
		default:
			styles = {
				"--border-top": "none",
				"--border-left": "none",
				"--border-right": "none",
				"--border-bottom": "none",
			};
			break;
	}

	styles = {
		...styles,
		"--text-align":
			props.textAlign === undefined ? "center" : TextAlignEnum[props.textAlign],
	};

	return (
		<input
			className={inputStyle.input_componenet}
			type={props.type}
			disabled={props.disabled}
			style={styles as React.CSSProperties}
			placeholder={props.placeHolder}
			value={props.value}
			maxLength={props.maxLength}
			onChange={props.onChange}
		/>
	);
};

export default CommonInput;
