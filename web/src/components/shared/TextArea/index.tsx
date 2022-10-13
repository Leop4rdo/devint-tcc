import React, {
	useState,
	useEffect,
	useRef,
	TextareaHTMLAttributes,
} from "react";

interface IAutoTextArea {
	placeholder?: string
} 

const AutoTextArea : React.FC<IAutoTextArea> = (props: TextareaHTMLAttributes<HTMLTextAreaElement> ) => {
	
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
			setTextAreaHeight("auto");
		}
	};

	return (
		<div
			style={{
				minHeight: parentHeight,
			}}
		>
			<textarea
				{...props}
				placeholder={'Escreva um comentario...'}
				ref={textAreaRef}
				rows={1}
				style={{
					height: textAreaHeight,
				}}
				onChange={onChangeHandler}
			/>
		</div>
	);
};

export default AutoTextArea;