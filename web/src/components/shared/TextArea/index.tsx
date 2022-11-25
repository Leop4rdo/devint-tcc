import React from "react"

interface ITextArea{
    placeholder? : string
    onChange? : any
    name? : string
}
const TextArea : React.FC<ITextArea> = ({placeholder , onChange , name}) => {
    return (
        <div
			className="container-text-area"
		>
			<textarea placeholder={placeholder} onChange={onChange} name={name}>

            </textarea>
		</div>
    )
}


export default TextArea