import { action$, Form } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import styles from './searchbar.module.scss';
import Icon from '~/components/icon';

interface SearchbarProps {}
export const useAddUser = action$(user => {
  console.log(user);
  return {
    success: true,
    user,
  };
});

export default component$<SearchbarProps>(() => {
  const action = useAddUser();
  return (
    <Form action={action} class={styles.search}>
      <input type="text" name="username" class={styles.input} placeholder="Search & Enter" />
      <button aria-label="Search input" type="submit" class={styles.button}>
        <Icon icon="search" classes={styles.icon} />
      </button>
    </Form>
  );
});
