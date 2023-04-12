

export const ContactList = ({contacts, deleteContact}) => {
    return (
    <ul>
    {contacts.map(({id, name, number}) => {
        return (
        <li key={id}>
            {name}: {number}
            <button type="button" onClick={() => deleteContact(id)}>
                Delete
            </button>
        </li>
        )
    })}    
    </ul>
    );
};