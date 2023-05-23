export default function Th ( props )
{
    return (
        <th  { ...props } scope="col" className="px-6 py-3">
            { props.children }
        </th>
    )
}
