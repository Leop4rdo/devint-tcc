const ObjectMapper = {
    mapTo: (target: Object, source: Object) => {
        const filteredEntries = Object.entries(source)
            .filter(([key, value]) => Object.keys(target).includes(key))

        filteredEntries.forEach(([key, value]) => target[key] = value)

        return target
    },
}

export default ObjectMapper

