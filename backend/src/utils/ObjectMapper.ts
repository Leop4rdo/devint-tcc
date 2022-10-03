const ObjectMapper = (target: Object, source: Object) => {
    const filteredEntries = Object.entries(source)
        .filter(([key, value]) => Object.keys(target).includes(key))

    // for (const [key, value] of filteredEntries) {
    //     target[key as keyof typeof target] = value;
    // }

    filteredEntries.forEach(([key, value]) => target[key] = value)

    return target
}

export default ObjectMapper
