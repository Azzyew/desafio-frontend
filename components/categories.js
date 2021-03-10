export default function Categories(props) {
    const categories = props.categories;

    return (
        <button className="text-blue-900 font-body text-sm border-2 border-blue-900 rounded-full w-auto justify-between">{categories.name}</button>   
    )
}