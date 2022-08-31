export default class StyleBuilder {
    private derivedStyles : { status : string | number, style : string }[] = []
    private base : any = {}

    addStyle(_status : string | number, _style : any, base? : boolean) {
        if (base) {
            this.base = {status : _status, style : _style}
            return this
        }

        const statusAlreadyExists = this.derivedStyles.find(
            ({status}) => status === _status
        )

        if (statusAlreadyExists) {
            const index = this.derivedStyles.indexOf(statusAlreadyExists)
            this.derivedStyles[index] = { status : _status, style : _style }
        } else {
            this.derivedStyles.push({status : _status, style : _style})
        }

        return this
    }

    process(status : string | number) {
        if (!this.base) return console.error('there is no base style defined!')

        if (status != this.base.status) {
            const statusStyle = this.derivedStyles.find(style => style.status === status)

            if (!statusStyle) return console.error('Status not found!')
            
            return [
                this.base.style,
                statusStyle.style
            ]
        } else {
            return this.base.style
        }
    }
}
