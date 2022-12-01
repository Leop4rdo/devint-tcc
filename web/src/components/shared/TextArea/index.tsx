import React from "react"

interface ITextArea{
    placeholder? : string
    onChange? : any
    name? : string
    value? : any
}
const TextArea : React.FC<ITextArea> = ({placeholder , onChange , name , value}) => {
    return (
        <div
			className="container-text-area"
		>
			<textarea 
            placeholder={placeholder} 
            onChange={onChange}
            name={name}
            value={value}
            >

            </textarea>
		</div>
    )
}


export default TextArea