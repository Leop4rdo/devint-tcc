const ObjectMapper = (target : Object, source : Object) => {
    for (const key of Object.keys(source)) {
        const val = source[key];
        if (val !== undefined) {
            target[key] = val;
        }
    }
    return target 
}