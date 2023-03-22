import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import Header from '~/components/header';
import Sidebar from '~/components/sidebar';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
      <Header />
      <div class="flex">
        <Sidebar />
        <main class="bg-white flex-1">
          <Slot />
        </main>
      </div>
    </>
  );
});
