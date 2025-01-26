import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filters = useSelector((state) => state.filters.name);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.listItem}>
          <Contact contactItem={contact} />
        </li>
      ))}
    </ul>
  );
}
