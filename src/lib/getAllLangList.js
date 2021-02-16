import lang from "data/langList.json"

export const getAllLangList = () => {
    return lang.map((item, index) => (
        <option value={`${item.lang}`} key={index}>
            {item.langKr}
        </option>
    ))
}
