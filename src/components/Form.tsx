import * as React from 'react';
import { useForm } from 'react-hook-form';
import ListNamesEntry from '../interfaces/ListNamesEntry';
import uuidv1 from 'uuid/v1';
import { ListNamesEntrySchema } from '../schema';
import { useStoreActions } from '../hooks';

const Form: React.FC = () => {
  const { register, handleSubmit, errors, reset } = useForm<ListNamesEntry>({
    validationSchema: ListNamesEntrySchema,
  });
  const addEntry = useStoreActions((state) => state.names.addEntry);

  const onSubmit = handleSubmit(name => {
    const data = {
      id: uuidv1(),
      ...name,
    };

    addEntry(data);

    reset();

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
      </div>
      <button type="submit">add name</button>
      <button className="pick_random_name_button">pick random name</button>
    </form>
  );
};

export default Form;
