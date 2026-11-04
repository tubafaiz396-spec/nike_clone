import "../components/Services.css";

const services = [
  ["01", "Performance essentials", "Footwear and apparel designed for running, training, basketball, and everyday movement."],
  ["02", "Nike By You", "Make your pair yours with personal colours, materials, and details."],
  ["03", "Easy delivery", "Simple ordering, free delivery in this demo experience, and support when you need it."],
  ["04", "Member mindset", "Early access, considered edits, and inspiration for your next move."],
];

export default function Services() {
  return <section className="services-container container"><div className="services-heading"><div><p className="eyebrow">Made to support you</p><h2>More ways to<br /><em>keep moving.</em></h2></div><p>From the product to the last mile, every part of the experience should feel clear, capable, and considered.</p></div><div className="service-list">{services.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><b>↗</b></article>)}</div></section>;
}
