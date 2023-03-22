import { component$ } from '@builder.io/qwik';
import styles from './sidebar.module.scss';

interface SidebarProps {}

export default component$<SidebarProps>(() => {
  return <aside class={styles.sidebar}>sidebar</aside>;
});
