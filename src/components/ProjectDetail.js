import { Link } from 'react-router-dom';
import '../styles/components/Detail.scss';

const ProjectDetail = (props) => {
  if (props.project === undefined) {
    return <p>Project Not Found</p>;
  } else {
    return (
      <>
        <article className='article_container'>
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
            </div>
            <div className='detail__content'>
              <p className='detail__content__text'>{props.project.tools}</p>
              <p className='detail__content__text'>
                {props.project.description1}
              </p>
              <p className='detail__content__text'>
                {props.project.description2}
              </p>
              <p className='detail__content__text'>
                {props.project.description3}
              </p>
              <p className='detail__content__text'>
                {props.project.description4}
              </p>
              <p className='detail__content__text'>
                {props.project.description5}
              </p>
              <a
                className='detail__content__text--linkWeb'
                title='Link to website'
                href={props.project.link}
              >
                Visit Website
              </a>
            </div>
          </div>
          <Link className='go_back_btn' to='/'>
            Go Back
          </Link>
        </article>
      </>
    );
  }
};

export default ProjectDetail;
