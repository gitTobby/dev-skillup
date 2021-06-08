import SearchBox from '../../src/contact/SearchBox';
import ContactList from '../../src/contact/ContactList';
import ButtonBox from '../../src/contact/ButtonBox';
import Info from '../../src/contact/Info';

const Contact = () => {
  return (
    <div className="container ex-contact">
      <div className="contact-header">
        <h1 className="subject">김동혁의 연락처</h1>
        <ButtonBox />
      </div>
      <div className="contact-wrap">
        <div className="col left">
          <SearchBox />
          <ContactList />
        </div>
        <div className="col right">
          <Info />
        </div>
      </div>
    </div>
  );
};

export default Contact;
