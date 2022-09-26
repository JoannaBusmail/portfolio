import '../styles/core/Variables.scss';
import '../styles/components/ListProjects.scss';
import { Link } from 'react-router-dom';

const ListProjects = (props) => {
  return (
    <section>
      <div className='border-one'>
        <li className='item'>
          <article className='item_list'>
            <h3 className='item item_title'>{props.projects.title}</h3>
            <img
              className='item_image'
              src={props.projects.image}
              alt={`imagen de proyecto ${props.projects.image}`}
            />
            <p className='item item_tools'>{props.projects.tools}</p>
            <Link className='link' to={`/project/${props.projects.id}`}>
              <button className='item_btn'>More Info</button>
            </Link>
          </article>
        </li>
      </div>
    </section>
  );
};

export default ListProjects;
