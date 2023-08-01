import { IconType } from "react-icons/lib";


interface CategorieslistProp {
    
    icon:IconType;
    label:string;
    selected:boolean;
    // hrllo:Number;
}
const Categorylist:React.FC<CategorieslistProp> = ({label,icon:Icon,selected}) => {
  return (
    <div className={`
    flex flex-col items-center cursor-pointer
    text-black px-6
   hover:text-neutral-500 transition
    ${selected?'border-b-neutral-800':'border-transparent'}
    ${selected?'text-neutral-800':'text-neutral-500'}

  `}>
    <Icon size={24}/>
    <div className="font-small text-sm">{label}</div>
    </div>
  )
}

export default Categorylist