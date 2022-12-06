import React from "react"

interface ITextArea{
    placeholder? : string
    onChange? : any
    name? : string
    value? : any
    maxLength?: number
}
const TextArea : React.FC<ITextArea> = ({placeholder , onChange , name , value , maxLength}) => {
    return (
        <div
			className="container-text-area"
		>
			<textarea 
            placeholder={placeholder} 
            onChange={onChange}
            name={name}
            value={value}
            maxLength={maxLength}
            >

            </textarea>
		</div>
    )
}


export default TextArea