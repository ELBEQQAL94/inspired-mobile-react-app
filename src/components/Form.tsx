import * as React from 'react';
import { useStoreState } from '../hooks';
import { useForm } from 'react-hook-form';
import ListNamesEntry from '../interfaces/ListNamesEntry';
import uuidv1 from 'uuid/v1';
import { ListNamesEntrySchema } from '../schema';
import { useStoreActions } from '../hooks';
import { findElements } from '../helper';

const Form: React.FC = () => {

  const { register, handleSubmit, errors, reset } = useForm<ListNamesEntry>({
    validationSchema: ListNamesEntrySchema,
  });

  const entries = useStoreState(state => state.names.entries);
  const payload = Math.floor(Math.random() * entries.length);

  // actions
  const addEntry = useStoreActions(state => state.names.addEntry);
  const randomEntry = useStoreActions(state => state.names.randomEntry);

  // return error if the name is repeated
  const [duplicateName, setDuplicateName] = React.useState(false);

  const onSubmit = handleSubmit(name => {
    if(findElements<ListNamesEntry, string>(entries, name.name)) {
      setDuplicateName(true);
    } else {
      setDuplicateName(false);
      const data = {
        id: uuidv1(),
        ...name,
      };
      addEntry(data);
      reset();
    }
  });
  return (
    <form onSubmit={onSubmit}>
      <div className="input_group">
        <input
          type="text"
          name="name"
          placeholder="type name.."
          ref={register}
        />
        <p className="error">{errors ? errors?.name?.message : ''}</p>
        <p className="error">{duplicateName ? 'Name should be unique' : ''}</p>
      </div>
      <button type="submit">add name</button>
      <button
        onClick={() => randomEntry(payload)}
        className="pick_random_name_button"
      >
        pick random name
      </button>
    </form>
  );
};

export default Form;
