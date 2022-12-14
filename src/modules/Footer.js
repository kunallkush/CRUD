import React from "react";

function Footer() {
    const year = new Date().getFullYear()
  return (
<footer className="flex-shrink-0 py-1 bg-dark text-white-50">
    <p>
        copyright &copy; {year}
    </p>
</footer>
  );
}

export default Footer;
