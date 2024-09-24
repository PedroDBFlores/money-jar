import { FaRegChessQueen } from 'react-icons/fa6';
 
export default function Header({title, gradient = false} : { title: string; gradient?: boolean; }) {

  return (
    <header className={"flex space-x-2 items-center justify-center p-4" + (gradient ? " bg-gradient-to-r from-purple to-mint" : "")}>
        <FaRegChessQueen size={20} color='white'/>
        <h1 className="text-lg text-white"> 
            {title}
        </h1>
    </header>
  );
}