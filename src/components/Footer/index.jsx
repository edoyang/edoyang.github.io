import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Edoardo (Edo Yang). Software Engineer
        in Sydney, Australia.
      </div>

      <div className="links">
        <a
          href="https://mail.google.com/mail/u/0/?to=edoyangz@gmail.com&fs=1&tf=cm"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email Edoardo">
          <img src="/icons/email.svg" alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
