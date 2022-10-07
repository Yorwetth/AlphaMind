let contactList = [];

const renderContacts = () => {
    const contactsContainer = document.querySelector("#contacts");
    contactsContainer.innerHTML = "";
  
    contactList.forEach((contact) => {
      const newContact = `
          <div class="contact">
            <div class="contact-info">
                <p>${contact.name}</p>
                <span>${contact.phoneNumber}</span>
            </div>
            <div class="contact-remove">
                <img src="icons/trash.png" />
            </div> 
          </div>
      `;
  
      contactsContainer.innerHTML += newContact;
    });
  };
  
  document.querySelector("#add-contact").addEventListener("click", () => {
    const nameField = document.querySelector("#name");
    const phoneNumberField = document.querySelector("#phone-number");
  
    const newContact = {
      name: nameField.value,
      phoneNumber: phoneNumberField.value,
    };
  
    contactList.push(newContact);
  
    renderContacts();
  
    nameField.value = "";
    phoneNumberField.value = "";
  });
  
  document.querySelector("#contacts").addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
      const trashes = [...document.querySelectorAll(".contact-remove img")];
      const elementIndex = trashes.indexOf(event.target);
  
      contactList = contactList.filter((el, index) => {
        return index !== elementIndex;
      });
  
      renderContacts();
    }
  });
  
  renderContacts();