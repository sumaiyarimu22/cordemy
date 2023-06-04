import { Collapse } from "react-collapse";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const AccordionItem = ({ open, toggle, ques, ans }) => {
  return (
    <div className="pt-3">
      <div
        className=" bg-black text-white px-10 flex justify-between items-center cursor-pointer py-2"
        data-aos="fade-up"
        data-aos-duration="1000"
        onClick={toggle}
      >
        <p className="text-xl ">{ques}</p>
        <div className="text-xl">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="bg-black text-white ps-10 pe-20 py-3 ">{ans}</div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
