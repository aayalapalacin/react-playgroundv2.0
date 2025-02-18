import React, {useState} from 'react'
import "../app/styles/dropdown.css";
  import { motion } from "framer-motion";

interface DropdownProps{
    dropdownTitle: string;
    dropdownArray: string[];
}

const Dropdown: React.FC<DropdownProps> = ({dropdownTitle, dropdownArray})=>  {
    const [open, setOpen] = useState(false);
    console.log(dropdownArray,"drop")
  return (
    <div className="p-8 pb-56 flex items-center justify-center ">
    <motion.div animate={open ? "open" : "closed"} className="relative">
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
      >
        <span className="font-medium text-sm">{dropdownTitle}</span>
        <motion.span variants={iconVariants}>

            <svg className="uil uil-arrow-down" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4z"></path></svg>
        </motion.span>
      </button>
 
        <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-50%" }}
        className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
        >
            {dropdownArray && dropdownArray.length > 0 ?
                        dropdownArray.map((dropdownItem, dropdownIndex)=>{
                            return(
                                    <motion.li
                                        variants={itemVariants}
                                        onClick={() => setOpen(false)}
                                        className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
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