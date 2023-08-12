interface HeadingProps{
    title?:string;
    subtitle?:string;
    center?:boolean;
}


function Heading({title,subtitle,center}:HeadingProps) {
  return (
    <>
    <div className={center?'text-center':'text-start'}>
    <div className=" font-bold font-sans">{title}</div>
    <div className="font-light">{subtitle}</div>

    </div>
    </>
  )
}

export default Heading;
