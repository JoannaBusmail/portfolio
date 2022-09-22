import '../styles/components/Search.scss';

const Search = (props) => {
  const handleInputSearchTools = (ev) => {
    ev.preventDefault();
    props.handleSearchTool(ev.target.value);
  };

  return (
    <>
      <section>
        <a name='projects'></a>
        <div className='search__container'>
          <h2 className='title_projects'>Projects</h2>
          <div className='input__container'>
            <label className='filterInput_title' htmlFor=''>
              {' '}
              Search by Tool:{' '}
            </label>
            <input
              className='filterInput_value'
              type='text'
              id=''
              value={props.searchTools}
              onChange={handleInputSearchTools}
            ></input>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
