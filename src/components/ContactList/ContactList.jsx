import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactListStyled from "./ContactListStyled";
import { getVisibleContacts } from "../../redux/phoneBook/contacts-selectors";
import { deleteContact } from "../../redux/phoneBook/contacts-operations";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  const onDeleteContact = (id) => dispatch(deleteContact(id));
  return (
    <ContactListStyled>
      {contacts.map((contact) => {
        const { id, name, number } = contact;
        const handleDelete = () => onDeleteContact(id);

        return (
          <li className="item" key={id}>
            <p className="name">{name}:</p>
            <p className="number">{number}</p>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              className="delBtn"
              type="button"
              onClick={handleDelete}
              size="small"
            >
              Delete
            </Button>
          </li>
        );
      })}
    </ContactListStyled>
  );
};

export default ContactList;

// const mapstateToProps = (state) => {
//   return {
//     contacts: getVisibleContacts(state),
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   onDeleteContact: (id) => dispatch(deleteContact(id)),
// });

// export default connect(mapstateToProps, mapDispatchToProps)(ContactList);
