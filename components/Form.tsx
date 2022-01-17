import { useState } from 'react';
import styles from '../styles/components/Form.module.css';

interface FormValues {
  [key: string]: string;
}

export function Form() {
  const [formValues, setFormValues] = useState<FormValues>({});

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (Object.keys(formValues).length === 0) return;
        for (const prop in formValues) {
          if (formValues[prop] === '') return;
        }
        alert(JSON.stringify(formValues, null, 2));
      }}
    >
      <input
        className={styles.input}
        type="text"
        name="first"
        placeholder="First Name"
        onChange={handleOnChange}
      />
      <input
        className={styles.input}
        type="text"
        name="last"
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
