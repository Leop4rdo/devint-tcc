
import React, {
	useState,
	useEffect,
	useRef,
	TextareaHTMLAttributes,
} from "react";

interface IAutoTextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	placeholder?: string
	value?: string
	MaxLength? : number
} 

const AutoTextArea : React.FC<IAutoTextArea> = (props: IAutoTextArea ) => {
	
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const [text, setText] = useState("");
	const [textAreaHeight, setTextAreaHeight] = useState("auto");
	const [parentHeight, setParentHeight] = useState("auto");

	useEffect(() => {
		setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
		setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`);
	}, [text]);

	const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
		setText(event.target.value);

		if (props.onChange) {
			props.onChange(event);	
		}
	};

	return (
		<div
			className="auto-grow-text-area"
			style={{
				minHeight: parentHeight,
			}}
		>
			<textarea
				{...props}
				placeholder={props.placeholder}
				ref={textAreaRef}
				rows={1}
				style={{
					height: textAreaHeight,
				}}
				onChange={onChangeHandler}
				value={props.value}
				
			/>
		</div>
	);
};

export default AutoTextArea;