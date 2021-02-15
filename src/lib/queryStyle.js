export const queryStyle = (src_lang, target_lang, query) => {
    const styledQuery = `src_lang=${src_lang}&target_lang=${target_lang}&query=${query}`
    return styledQuery
}
