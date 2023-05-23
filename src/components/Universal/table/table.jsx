
export default function Table ( props )
{
    return (
        <table { ...props } className={ `w-full text-sm text-left ${ props.className }` }>
            { props.children }
        </table>

    )
}

