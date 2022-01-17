import { Dispatch, SetStateAction } from 'react';
import { FormValues } from '../pages';
import styles from '../styles/components/Form.module.css';

interface FormProps {
  onSubmit: (e: any) => void;
  formValues: FormValues;
  setFormValues: Dispatch<SetStateAction<FormValues>>;
}

export function Form({ onSubmit, formValues, setFormValues }: FormProps) {
  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className={styles.input}
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleOnChange}
      />
      <input
        className={styles.input}
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleOnChange}
      />
      <input
        className={styles.input}
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleOnChange}
      />
      <input
        className={styles.input}
        type="text"
        name="avatar"
        placeholder="Avatar"
        onChange={handleOnChange}
      />
      <button className={styles.submit} type="submit">
        Submit
      </button>
    </form>
  );
}
