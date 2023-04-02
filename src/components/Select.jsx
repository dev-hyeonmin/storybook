import Option from "./Option";

export default function Select({ loading, list, keyword, onSelected }) {
    return (
        <div className="item-select">
            {list.map((item) => {
                if (!keyword || item.title.includes(keyword)) {
                    return (
                        <Option
                            key={`opt${item.id}`}
                            option={item}
                            keyword={keyword}
                            onSelected={onSelected} />
                    )
                }
            })}
        </div>
    )
}