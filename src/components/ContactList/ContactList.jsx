import css from './ContactList.module.css';
import { Contact } from './Contact/Contact';

export const ContactList = ({ contacts, handleClick }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name: names, number }) => {
        return (
          <li className={css.item} key={id}>
            <Contact
              id={id}
              names={names}
              number={number}
              handleClick={handleClick}
            />
          </li>
        );
      })}
    </ul>
  );
};
