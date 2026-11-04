import "../components/Contact.css";

export default function Contact() {
  return (
    <section className="contact-container container">
      <div className="contact-heading">
        <p className="eyebrow">Say hello</p>
        <h2>We are here<br /><em>to help.</em></h2>
        <p>Have a question about a product, an order, or where to go next? Reach out and we will point you in the right direction.</p>
        <a className="contact-primary-link" href="mailto:support@nike.com">Email customer support <span>↗</span></a>
      </div>
      <div className="contact-grid">
        <a className="contact-item" href="mailto:support@nike.com"><span>Customer support</span><strong>support@nike.com</strong><small>Mon – Fri · 8 AM – 8 PM EST</small></a>
        <div className="contact-item"><span>Visit us</span><strong>Nike, Inc.</strong><small>One Bowerman Drive<br />Beaverton, OR 97005</small></div>
        <div className="contact-item"><span>Delivery questions</span><strong>Cash on delivery</strong><small>Available through this demo checkout experience.</small></div>
        <div className="contact-item"><span>Follow the movement</span><strong>@nike</strong><small><a href="https://www.instagram.com/nike" target="_blank" rel="noreferrer">Instagram</a> · <a href="https://www.youtube.com/user/nike" target="_blank" rel="noreferrer">YouTube</a></small></div>
      </div>
    </section>
  );
}
