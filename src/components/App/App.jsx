import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import Loader from "../Loader/Loader.jsx";
import Error from "../Error/Error.jsx";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList.jsx";
import { fetchContacts } from "../../redux/contactsOps.js";
import { selectLoading, selectError } from "../../redux/selectors.js";
import css from "./App.module.css";

export default function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  console.log("🚀  error:", error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.mainHeader}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <Loader />}
      {error && <Error />}
      <ContactList />
    </div>
  );
}
