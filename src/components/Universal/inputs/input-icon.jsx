
import Input from "./input";

export default function InputIcon ( props )
{
    return (
        <div>
            <label for="input-group-1" className="block mb-2 text-sm font-medium text-gray-900"> { props.label } </label>
            <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

                    { props.icon ? props.icon : <BsPersonAdd /> }
                </div>
                <Input { ...props } id="input-group-1" className={ ` pl-10 p-2.5 ${ props.className }` } />
            </div>
        </div>
    )
}
