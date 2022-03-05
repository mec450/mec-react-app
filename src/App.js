import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

function Header() {
  return (
    <header id="header-main">
      <h1>Top Tier Headline</h1>
      <nav className="nav-menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">History</a></li>
        </ul>
      </nav>
    </header>
  )
}

function MessengerHeader(props) {
  const {
    name
  } = props;
  return (
    <h3 className="name">{name}</h3>
  )
}

function Messenger() {
  return (
    <div id="messenger">
      <section className="chat">
        <h2>Chat</h2>
        <div className="message responder">
          <div>😀</div>
          <section className="bubbles">
            <h3 className="name">George</h3>
            <p className="bubble">
              Hey, need to catch up with you.
            </p>
          </section>
        </div>
        <div className="message sender">
          <section className="bubbles">
            <h3 className="name">Me</h3>
            <p className="bubble">
              What's up
            </p>
            <p className="bubble">
              Did you call earlier? I was busy, couldn't pick up.
            </p>
          </section>
          <div>😀</div>
        </div>
      </section>
    </div>
  )
}

function Footer() {
  return (
    <footer id="footer-main">
      <p>This is a footer.</p>
      <nav className="nav-menu">
        <ul>
          <li><a href="#">Terms &amp; Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </footer>
  )
}

function Form() {
  const [name, setName] = useState('Martin');
  const [email, setEmail] = useState('martin.christian6445@gmail.com');

  useEffect(() => {
    console.log('name, email = ' ,{name, email})
  },[name, email])

  return (
    <form id="payment-form">
      <h3>Payment form</h3>
      <p>Required fields are followed by <strong><abbr title="required">*</abbr></strong>.</p>
      <section>
        <h4>Contact Information</h4>
        <fieldset>
          <legend>Title</legend>
          <ul>
            <li>
              <label htmlFor="title_1">
                <input type="radio" id="title_1" name="title" value="K" />
                  King
              </label>
            </li>
            <li>
              <label htmlFor="title_2">
                <input type="radio" id="title_2" name="title" value="Q" />
                  Queen
              </label>
            </li>
            <li>
              <label htmlFor="title_3">
                <input type="radio" id="title_3" name="title" value="J" />
                  Joker
              </label>
            </li>
          </ul>
        </fieldset>
        <p>
          <label htmlFor="name">
            <span>Name: </span>
            <strong><abbr title="required">*</abbr></strong>
          </label>
          <input type="text" id="name" name="username" value={name} onChange={e => setName(e.target.value)} />
        </p>
        <p>
          <label htmlFor="mail">
            <span>E-mail: </span>
            <strong><abbr title="required">*</abbr></strong>
          </label>
          <input type="email" id="mail" name="usermail" value={email} onChange={e => setEmail(e.target.value)} />
        </p>
        <p>
          <label htmlFor="pwd">
            <span>Password: </span>
            <strong><abbr title="required">*</abbr></strong>
          </label>
          <input type="password" id="pwd" name="password" />
        </p>
      </section>
      <section>
        <h4>Payment information</h4>
        <p>
          <label htmlFor="card">
            <span>Card type:</span>
          </label>
          <select id="card" name="usercard">
            <option value="visa">Visa</option>
            <option value="mc">Mastercard</option>
            <option value="amex">American Express</option>
          </select>
        </p>
        <p>
          <label htmlFor="number">
            <span>Card number:</span>
            <strong><abbr title="required">*</abbr></strong>
          </label>
          <input type="tel" id="number" name="cardnumber" />
        </p>
        <p>
          <label htmlFor="expiration">
            <span>Expiration date:</span>
            <strong><abbr title="required">*</abbr></strong>
          </label>
          <input type="text" id="expiration" required="true" placeholder="MM/YY"
                 pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$" />
        </p>
      </section>
      <section>
        <h4>Submit</h4>
        <p>
          <button type="submit">Validate the payment</button>
        </p>
      </section>
    </form>
  )
}

function Main() {
  return (
    <main>
      <section>
        <h2>2nd Tier Section</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec egestas ante. Etiam tristique, ipsum nec sagittis ornare, tortor felis luctus nunc, non sodales risus orci sed lectus. Proin mattis vehicula risus non vestibulum. Cras sit amet erat ut dui consectetur euismod. Donec a lacinia lectus, ut gravida dui. Proin aliquam purus eget nisi gravida mollis. Pellentesque posuere, orci id hendrerit tincidunt, lacus lacus sodales nisl, at porttitor sem orci ut nisl. Nam fermentum feugiat ligula, nec ultricies orci mollis in. Etiam convallis neque sodales dui vehicula, eget mollis eros volutpat. Vivamus vitae risus ligula.
        </p>
        <section>
          <h3>3rd Tier Section</h3>
          <p>
            Suspendisse potenti. Nulla facilisi. Cras auctor enim lacus, vel finibus nulla faucibus nec. In at ante mattis, dapibus mi vitae, dapibus velit. Morbi sodales urna dolor. Praesent at placerat tellus. Sed vulputate tempus odio, a pharetra nisi venenatis nec. Praesent tempus suscipit ex, nec tempor lorem vehicula et. Nullam tincidunt non dui et finibus. Nulla in dui quis ante venenatis bibendum. Integer eu elementum leo, id viverra ante. Fusce ac consectetur sapien. Aliquam sit amet gravida dui. Ut ornare sapien odio, vitae fringilla dolor varius interdum. Sed eget pretium justo, id scelerisque nibh.
          </p>
        </section>
        <section>
          <h3>3rd Tier Section</h3>
          <p>
            Suspendisse potenti. Nulla facilisi. Cras auctor enim lacus, vel finibus nulla faucibus nec. In at ante mattis, dapibus mi vitae, dapibus velit. Morbi sodales urna dolor. Praesent at placerat tellus. Sed vulputate tempus odio, a pharetra nisi venenatis nec. Praesent tempus suscipit ex, nec tempor lorem vehicula et. Nullam tincidunt non dui et finibus. Nulla in dui quis ante venenatis bibendum. Integer eu elementum leo, id viverra ante. Fusce ac consectetur sapien. Aliquam sit amet gravida dui. Ut ornare sapien odio, vitae fringilla dolor varius interdum. Sed eget pretium justo, id scelerisque nibh.
          </p>
        </section>
        <section>
          <h3>3rd Tier Section</h3>
          <p>
            Suspendisse potenti. Nulla facilisi. Cras auctor enim lacus, vel finibus nulla faucibus nec. In at ante mattis, dapibus mi vitae, dapibus velit. Morbi sodales urna dolor. Praesent at placerat tellus. Sed vulputate tempus odio, a pharetra nisi venenatis nec. Praesent tempus suscipit ex, nec tempor lorem vehicula et. Nullam tincidunt non dui et finibus. Nulla in dui quis ante venenatis bibendum. Integer eu elementum leo, id viverra ante. Fusce ac consectetur sapien. Aliquam sit amet gravida dui. Ut ornare sapien odio, vitae fringilla dolor varius interdum. Sed eget pretium justo, id scelerisque nibh.
          </p>
        </section>
        <Form />
      </section>
      <aside>
        <h4>2nd Tier Side Content</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec egestas ante. Etiam tristique, ipsum nec sagittis ornare, tortor felis luctus nunc, non sodales risus orci sed lectus. Proin mattis vehicula risus non vestibulum. Cras sit amet erat ut dui consectetur euismod. Donec a lacinia lectus, ut gravida dui. Proin aliquam purus eget nisi gravida mollis. Pellentesque posuere, orci id hendrerit tincidunt, lacus lacus sodales nisl, at porttitor sem orci ut nisl. Nam fermentum feugiat ligula, nec ultricies orci mollis in. Etiam convallis neque sodales dui vehicula, eget mollis eros volutpat. Vivamus vitae risus ligula.
        </p>
        <article>
          <header>
            <h5>3rd Tier Article Parent</h5>
          </header>
          <p>
            Suspendisse potenti. Nulla facilisi. Cras auctor enim lacus, vel finibus nulla faucibus nec. In at ante mattis, dapibus mi vitae, dapibus velit. Morbi sodales urna dolor. Praesent at placerat tellus. Sed vulputate tempus odio, a pharetra nisi venenatis nec. Praesent tempus suscipit ex, nec tempor lorem vehicula et. Nullam tincidunt non dui et finibus. Nulla in dui quis ante venenatis bibendum. Integer eu elementum leo, id viverra ante. Fusce ac consectetur sapien. Aliquam sit amet gravida dui. Ut ornare sapien odio, vitae fringilla dolor varius interdum. Sed eget pretium justo, id scelerisque nibh.
          </p>
          <article>
            <h6>4th Tier Article Iteration Child</h6>
          </article>
          <article>
            <h6>4th Tier Article Iteration Child</h6>
          </article>
          <article>
            <h6>4th Tier Article Iteration Child</h6>
          </article>
          <article>
            <h6>4th Tier Article Iteration Child</h6>
          </article>
        </article>
      </aside>
    </main>
  )
}


function App() {
  return (
    <div>
      <Messenger></Messenger>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;


function E(e) {
  this.e = e;
}

E.prototype.methodE = () => console.log('methodE called');

function F(f) {
  E.call(this, 'ee');
  this.f = f
}

F.prototype = Object.create(E.prototype);

const f = new F('ff');

console.log('f = ' , f);
f.methodE();




