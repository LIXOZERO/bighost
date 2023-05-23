export default function Textarea ( props )
{
    return (

        <div>
            { props.label && <label className={ `block mb-2 text-sm font-medium text-gray-900` }>{ props.label }</label> }
            <textarea { ...props } className={ `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 ${ props.className }` } rows="7" cols="25" >
            </textarea>
        </div>
    )
}
