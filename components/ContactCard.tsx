import { Contact } from '@prisma/client';
import Image from 'next/image';

import styles from '../styles/components/ContactCard.module.css';

export function ContactCard({
  id,
  firstName,
  lastName,
  email,
  avatar
}: Contact) {
  return (
    <article key={id} className={styles.contact}>
      <Image
        src={avatar}
        blurDataURL={avatar}
        alt={`${firstName}${lastName}`}
        width={80}
        height={80}
        placeholder="blur"
        className={styles.avatar}
      />
      <div className={styles.info}>
        <p className={styles.name}>
          {firstName} {lastName}
        </p>
        <p className={styles.email}>{email}</p>
      </div>
    </article>
  );
}
