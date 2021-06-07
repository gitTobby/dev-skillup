import lists from './data/lists';
import { IList } from './types/types';

interface IContactProps {
  keyword: string;
  selected: IList | undefined;
  selectList: (list: IList) => void;
}

const ContactList = ({ keyword, selected, selectList }: IContactProps) => {
  const handleClick = (list: IList) => {
    const info = list;
    selectList(info);
  };

  return (
    <div className="contact-list">
      <ul>
        {lists
          .filter((list) => list.name.indexOf(keyword) !== -1)
          .map((list, index) => (
            <li key={index}>
              <button type="button" className={selected === list ? 'selected' : ''} onClick={() => handleClick(list)}>
                {list.name}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ContactList;
