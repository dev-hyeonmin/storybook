import Option from "./Option";

export default function Select({ loading, list, keyword }) {

    return (
        <div class="item-select">
            {list.map((item) => {
                if (!keyword || !item.title.indexOf(keyword)) {
                    return (
                        <Option option={item} keyword={keyword} />
                    )
                }
            })}
        </div>
    )
}