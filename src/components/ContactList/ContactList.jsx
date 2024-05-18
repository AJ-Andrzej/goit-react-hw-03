import css from './ContactList.module.css'
import Contact from '../Contact/Contact'

export default function ContactList({ contacts }) {
    return (
    <ul className={css.list}>
        {contacts.map((contact) => (
        <li className={css.card} key={contact.id}>
                <Contact contact={contact} />
        </li>
        ))}
    </ul>
    )
}