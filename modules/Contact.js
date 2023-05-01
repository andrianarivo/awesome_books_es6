import { mainContainer } from './DOMLoader.js';

const showContact = () => {
  mainContainer.innerHTML = `
    <section class="d-flex flex-column justify-content-center align-items-center">
      <h2 class='text-center'>Contact Information</h2>
      <p>
        Do you have any questions od you just want to say "Hello"?<br>
        You can reach out to us!
      </p>
      <ul>
        <li>Our email: mail@mail.com</li>
        <li>Our phone number: 0042386534422</li>
        <li>Our address: street name 22, 84503, city, country</li>
      </ul>
    </section>
  `;
};

export default showContact;
