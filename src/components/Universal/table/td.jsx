export default function Td ( props )
{
    return (
        <td  { ...props } className="px-5 py-3">
            { props.children }
        </td>
    )
}
