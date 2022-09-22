import '../styles/core/Variables.scss';
import '../styles/components/ListProjects.scss';

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
            <button className='item_btn btn-grad'>More Info</button>
          </article>
        </li>
      </div>
    </section>
  );
};

export default ListProjects;
