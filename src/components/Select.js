import Option from "./Option";

export default function Select({ loading, list, keyword }) {
    return (
        <div className="item-select">
            {list.map((item) => {
                if (!keyword || item.title.includes(keyword)) {
                    return (
                        <Option option={item} keyword={keyword} />
                    )
                }
            })}
        </div>
    )
}