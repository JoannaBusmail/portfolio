import { Link } from 'react-router-dom';

const ProjectDetail = (props) => {
  if (props.project === undefined) {
    return <p>Project Not Found</p>;
  } else {
    return (
      <>
        <article>
          <img alt={props.project.title} src={props.project.imageDetail1} />
        </article>
        <Link to='/'>Go Back</Link>
      </>
    );
  }
};

export default ProjectDetail;
