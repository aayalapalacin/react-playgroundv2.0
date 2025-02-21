import React, {useState} from 'react'
import "../../app/styles/dropdown.css";
  import { motion } from "framer-motion";

interface DropdownProps{
    dropdownTitle: string;
    dropdownArray: string[];
    setCategory?: React.Dispatch<React.SetStateAction<string>>;

}

const Dropdown: React.FC<DropdownProps> = ({dropdownTitle, dropdownArray, setCategory})=>  {
    const [open, setOpen] = useState<boolean>(false);
    const [title,setTitle]=useState<string>(dropdownTitle)

  return (
    <div className=" pb-56 flex items-center justify-center ">
    <motion.div animate={open ? "open" : "closed"} className="relative">
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex shadow-react-glow items-center gap-2 px-3 py-2 rounded-md text-white bg-reactDarkBlue hover:bg-reactDarkBlue transition-colors"
      >
        <span className="font-medium text-sm">{title}</span>
        <motion.span variants={iconVariants}>

            <svg className="uil uil-arrow-down" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4z"></path></svg>
        </motion.span>
      </button>
 
        <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-50%" }}
        className="flex flex-col gap-2 p-2 rounded-lg bg-reactDarkBlue shadow-xl absolute top-[120%] left-[50%] w-auto overflow-hidden"
        >
            {dropdownArray && dropdownArray.length > 0 ?
                        dropdownArray.map((dropdownItem, dropdownIndex)=>{
                            return(
                                    <motion.li
                                        variants={itemVariants}
                                        key={dropdownIndex+"dropdown"}
                                        onClick={() => {
                                            setOpen(false)
                                            setTitle(dropdownItem);
                                            if(setCategory){
                                                setCategory(dropdownItem);
                                            }
                                        }
                                        }
                                        className="flex items-center gap-2 w-full p-2 text-xs text-white text-bold hover:text-reactDarkBlue font-medium whitespace-nowrap rounded-md text-slate-700 hover:bg-reactBlue transition-colors cursor-pointer"
                                    >
                                    
                                    <span>{dropdownItem}</span>
                                    </motion.li>
                            );
                            
                        })  
                        :"no items to display" 
                    }
        </motion.ul>
    </motion.div>
  </div>
  
  )
}

export default Dropdown


const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };
  
  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };
  
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: "afterChildren",
      },
    },
  };
  
  const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
  };