
(() => {
  const button = document.createElement("a");

  button.href = "/";
  button.textContent = "← Go Home";
  button.setAttribute("aria-label", "Go to the home page");

  Object.assign(button.style, {
    position: "fixed",
    top: "16px",
    right: "16px",
    zIndex: "99999",
    padding: "10px 14px",
    background: "#ffffff",
    color: "#222222",
    border: "1px solid #cccccc",
    borderRadius: "8px",
    font: "600 14px Arial, sans-serif",
    textDecoration: "none",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
  });

  document.body.appendChild(button);
})();
