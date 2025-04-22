import { Link } from 'react-router';

export function ContactPage() {
  return (
    <div className="flex flex-col">
      <h1>Contact ipsum dolor sit amet</h1>
      <h2>Asperiores dolor dolores doloribus facere labore</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolor dolores doloribus
        facere labore, nemo numquam perspiciatis praesentium <Link to="/">tempore</Link> voluptas?
        Adipisci consectetur labore libero quidem quis. Architecto eum fuga molestias. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <Link to="/">Return Home</Link>
    </div>
  );
}
