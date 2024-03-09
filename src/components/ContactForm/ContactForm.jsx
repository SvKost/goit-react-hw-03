import { nanoid } from "nanoid";

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const elements = e.target.elements;

    const id = nanoid();
    const name = elements.userName.value;
    const number = elements.number.value;

    const contactData = {
      id,
      name,
      number,
    };

    onAdd(contactData);

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="userName" required />
      </label>

      <label>
        Number
        <input type="text" name="number" required />
      </label>
      <button type="submit" title="Click to save new Contact">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
