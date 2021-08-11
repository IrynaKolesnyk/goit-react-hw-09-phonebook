import React from 'react';
import { connect } from 'react-redux';
import ContactListStyled from './ContactListStyled';
import { getVisibleContacts } from '../../redux/phoneBook/contacts-selectors';
import { deleteContact } from '../../redux/phoneBook/contacts-operations';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListStyled>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        const handleDelete = () => onDeleteContact(id);

        return (
          <li className="item" key={id}>
            <p className="name">{name}:</p>
            <p className="number">{number}</p>
            {/* <button
              className="delBtn"
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button> */}
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              className="delBtn"
              type="button"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </li>
        );
      })}
    </ContactListStyled>
  );
};

const mapstateToProps = state => {
  return {
    contacts: getVisibleContacts(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapstateToProps, mapDispatchToProps)(ContactList);
