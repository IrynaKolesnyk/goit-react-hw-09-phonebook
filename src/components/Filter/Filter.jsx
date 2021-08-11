import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterStyled from "./FilterStyled";
import contactsActions from "../../redux/phoneBook/phoneBookActions";
import { getFilter } from "../../redux/phoneBook/contacts-selectors";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const onChange = (event) =>
    dispatch(contactsActions.changeFilter(event.target.value));
  return (
    <FilterStyled>
      <h3 className="title">Finde contacts by name</h3>
      <form>
        <label>
          <input
            type="text"
            name="name"
            value={filter}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name can only contains letters, apostrophe, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
            required
            onChange={onChange}
            className="finde-input"
            autoComplete="off"
          />
        </label>
      </form>
    </FilterStyled>
  );
};

export default Filter;

// const mapstateToProps = (state) => ({
//   value: getFilter(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onChange: (event) =>
//     dispatch(contactsActions.changeFilter(event.target.value)),
// });

// export default connect(mapstateToProps, mapDispatchToProps)(Filter);
