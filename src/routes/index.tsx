import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Icon from '~/components/icon';

export default component$(() => {
  return (
    <>
      <Icon classes="fill-current" icon="shield" />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Softlife Lite',
  meta: [
    {
      name: 'description',
      content: 'This is a Softlife version simplify to management your church',
    },
  ],
};
