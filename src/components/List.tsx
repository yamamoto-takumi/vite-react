type ListProps = {
    listData: ListData[]
}

type ListData = {
    title: string;
    content: string;
}

export const List = (props: ListProps) => {
    const {listData} = props;
    return (
        <li>
            {listData.map((item) => (
                <ul>
                    {item.title}
                </ul>
            ))}
        </li>
    )
}