import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ data: { id, name, number }, onDeleteContact }) => {
  return (
    <div className={css.contactItem}>
      <div className={css.contactInfo}>
        <p>
          <FaUser className={css.contactIcon} />
          {name}
        </p>
        <p>
          <FaPhone className={css.contactIcon} />
          {number}
        </p>
      </div>
      <button className={css.contactBtn} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
