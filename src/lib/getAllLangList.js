import lang from "data/langList.json"

export const getAllLangList = () => {
    console.log(lang[1].en)
    return lang.map((item, index) => (
        <option value={`${item}`} key={index}>
            {item}
        </option>
    ))
}
