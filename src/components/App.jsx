import React, { Component } from "react";
import { nanoid } from "nanoid";
import { Filter } from "./Filter/Filter"
import { ContactList } from "./ContactsList/ContactsList";
import { ContactForm } from "./ContactForm/ContactForm";
import { Section } from "./Section/Section";


const LS_KEY = 'contacts';
export class App extends Component {
  
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

addContact = ({name, number}) => {
  const contact = {
    id: nanoid(),
    name,
    number,
  };

this.setState(({contacts}) => (
 contacts.find(contact => contact.name === name)
 ? alert(`${name} is alredy in contacts`)
 : {contacts: [contact, ...contacts],}
  ))
};

searchContact = (e) => {
const {value} = e.currentTarget;
this.setState({
  filter: value,
})
};

deleteContact = contactId => {
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== contactId)
  }))
};

componentDidMount() {
  const savedState = localStorage.getItem(LS_KEY);
  if(savedState) {
    const savedStateParse = JSON.parse(savedState);
    this.setState({ contacts: savedStateParse });
  };
};

componentDidUpdate(prevPreps, prevState) {
if(prevState.contacts !== this.state.contacts) {
  localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
};
};

render() {
const {contacts, filter} = this.state;
const filteredContacts = contacts.filter(contact => 
  contact.name.toLowerCase().includes(filter.toLowerCase())
)

  return (
    <>
    <Section title="Phonebook" />
    <ContactForm onSubmit={this.addContact} />
    <Section title="Contacts" />
    <Filter searchContact={this.searchContact} />
    <ContactList contacts={filteredContacts} deleteContact={this.deleteContact} />
    </>
  )
}
};