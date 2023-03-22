import { component$ } from '@builder.io/qwik';
import Icon from '../icon';
import styles from './sidebar.module.scss';

interface SidebarProps {}

export default component$<SidebarProps>(() => {
  return (
    <aside class={styles.sidebar}>
      <nav class={styles.navigation}>
        <ul class="list">
          <li
            class={[
              styles.item,
              {
                [styles.active]: true,
              },
            ]}
          >
            <a href="#" class={styles.link}>
              <Icon classes={styles.icon} icon="users" />
              <span>People</span>
            </a>
          </li>
          <li class={styles.item}>
            <a href="#" class={styles.link}>
              <Icon classes={styles.icon} icon="home" />
              <span>Crews</span>
            </a>
          </li>
          <li class={styles.item}>
            <a href="#" class={styles.link}>
              <Icon classes={styles.icon} icon="coffee" />
              <span>Appointments</span>
            </a>
          </li>
        </ul>
      </nav>

      <footer class={styles.legal}>&copy; 2023 by Softlife. All rights reserved.</footer>
    </aside>
  );
});
