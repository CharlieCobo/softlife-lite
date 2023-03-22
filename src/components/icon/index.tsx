import { component$ } from '@builder.io/qwik';

interface IconProps {
  icon: 'shield' | 'search' | 'bell' | 'message-square' | 'user' | 'users' | 'home' | 'coffee';
  classes: string;
}

export default component$(({ icon, classes }: IconProps) => {
  return (
    <svg
      class={[
        classes,
        {
          'fill-current': true,
        },
      ]}
    >
      <use xlink:href={`/sprites.svg#icon-${icon}`} />
    </svg>
  );
});
