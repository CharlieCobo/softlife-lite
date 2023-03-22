import { component$ } from '@builder.io/qwik';
import Searchbar from '../forms/searchbar';
import Icon from '../icon';

import styles from './header.module.scss';

interface HeaderProps {}

export default component$<HeaderProps>(() => {
  return (
    <header class={styles.header}>
      <img src="/softlife-logo.png" alt="Softlife Logo" class={styles.logo} />
      <Searchbar />
      <nav class={styles.navigation}>
        <div class={styles.box}>
          <Icon icon="bell" classes={styles.icon} />
          <span class={styles.notification}>7</span>
        </div>

        <div class={styles.box}>
          <Icon icon="message-square" classes={styles.icon} />
          <span class={styles.notification}>1</span>
        </div>

        <div class={styles.box}>
          <Icon icon="user" classes={styles.icon} />
          <span class={styles.name}>Jhon Doe</span>
        </div>
      </nav>
    </header>
  );
});
