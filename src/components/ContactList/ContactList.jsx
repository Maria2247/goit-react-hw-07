import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.listItem}>
          <Contact contactItem={contact} />
        </li>
      ))}
    </ul>
  );
}
