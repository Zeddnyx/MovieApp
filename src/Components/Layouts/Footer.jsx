import React from 'react';

export default function Footer() {
  return (
    <section className="text-center w-full mx-auto pb-5">
      <p>
        &copy;{' '}{new Date().getFullYear()} -{' '}
        <a href="https://github.com/ZeddNyx" target="_blank">
          Zeddnyx
        </a>
      </p>
    </section>
  );
}
