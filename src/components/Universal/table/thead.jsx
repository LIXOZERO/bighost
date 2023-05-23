
export default function Thead ( props )
{
    return (
        <thead  { ...props } className={ `text-xs text-gray-700 uppercase bg-gray-50 ${ props.className }` }>
            { props.children }
        </thead>
    )
}
