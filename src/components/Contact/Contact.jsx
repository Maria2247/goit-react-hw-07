import { FaPhoneAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contactItem: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div>
        <p>
          <FaPhoneAlt style={{ marginRight: "8px", size: "12px" }} />
          {name}
        </p>
        <p>
          <IoPersonSharp style={{ marginRight: "8px", size: "12px" }} />
          {number}
        </p>
      </div>
      <button onClick={handleDelete} className={css.btn}>
        Delete
      </button>
    </>
  );
}
