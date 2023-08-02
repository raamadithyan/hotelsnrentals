'use client';
interface Countainerprops {
    children:React.ReactNode;
}

const Container: React.FC<Countainerprops>=({children}) =>{
  return (
    <div className="" >
        
    {children}
    </div>
  )
}

export default Container