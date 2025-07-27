// Smooth scroll to contact section
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }
  
  // Simple form handler (replace with real integration)
  function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    alert(`Thank you, ${name}! Your message has been sent.`);
    event.target.reset();
  }