import { Link } from 'react-router-dom';
import '../styles/components/Detail.scss';

const ProjectDetail = (props) => {
  if (props.project === undefined) {
    return <p>Project Not Found</p>;
  } else {
    return (
      <>
        <article>
          <h3 className='detail__title'>{props.project.title} </h3>
          <div className='detail'>
            <div className='detail__image--container'>
              <img
                className='image detail__image--one'
                alt={props.project.title}
                src={props.project.imageDetail1}
              />
              <img
                className='image detail__image--two'
                alt={props.project.title}
                src={props.project.imageDetail2}
              />
              <img
                className='image detail__image--three'
                alt={props.project.title}
                src={props.project.imageDetail3}
              />
              <img
                className='image detail__image--four'
                alt={props.project.title}
                src={props.project.imageDetail4}
              />
              <img
                className='image detail__image--five'
                alt={props.project.title}
                src={props.project.imageDetail5}
              />
            </div>
            <div className='detail__content'>
              <p>{props.project.tools}</p>
              <p>{props.project.description1}</p>
              <p>{props.project.description2}</p>
              <p>{props.project.description3}</p>
              <p>{props.project.description4}</p>
              <p>{props.project.description5}</p>
            </div>
          </div>
        </article>
        <Link className='go_back_btn' to='/'>
          Go Back
        </Link>
      </>
    );
  }
};

export default ProjectDetail;
