import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="not-found-page container">
      <p className="eyebrow">Off the grid</p>
      <h1>That page<br /><em>missed its mark.</em></h1>
      <p>Let’s get you back to the collection and keep the next move simple.</p>
      <Link className="button button--dark" to="/">Back home <span>↗</span></Link>
    </main>
  );
}
