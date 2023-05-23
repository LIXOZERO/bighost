export default function Tr ( props )
{
    return (

        <tr  { ...props } className={ `border-b border-gray-200 ${ props.className }` }>
            {
                props.children
            }
        </tr>

    )
}
