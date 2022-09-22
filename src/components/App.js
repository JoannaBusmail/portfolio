import '../styles/App.scss';
import { useState } from 'react';
import About from './About';
import Header from './Header';
import Search from './Search';
import ListProjects from './ListProjects';
import Form from './Form';
import Footer from './Footer';
import DataProjects from '../data/projects_data.json';
import lsObject from '../services/ls';

function App() {
  const [dataProjects, setDataProjects] = useState(DataProjects);
  const [searchTools, setSearchTools] = useState('');
  const [formInputs, setFormInputs] = useState(
    lsObject.get('inputs', {
      name: '',
      email: '',
      phone: '',
      story: '',
    })
  );
  const handleInputForm = (dataInput) => {
    const inputValue = dataInput.value;
    const inputChanged = dataInput.name;
    const inputInfo = {
      ...formInputs,
      [inputChanged]: inputValue,
    };
    lsObject.set('inputs', inputInfo);
    setFormInputs(inputInfo);
  };

  const handleSearchTool = (value) => {
    setSearchTools(value);
  };
  const filter = dataProjects.filter((toolFilter) => {
    return toolFilter.tools
      .toLowerCase()
      .includes(searchTools.toLocaleLowerCase());
  });

  const renderDataProject = () => {
    return filter.map((projects, index) => {
      return <ListProjects key={index} projects={projects} />;
    });
  };

  const notFound = () => {
    if (searchTools !== '' && filter.length === 0) {
      return (
        <p className='not_found'>
          {searchTools} Not Found. No projects on {searchTools} yet
        </p>
      );
    }
  };
  return (
    <>
      <Header />
      <main>
        <About />
        <Search handleSearchTool={handleSearchTool} searchTools={searchTools} />
        {notFound()}
        <ul className='list-projects_container'> {renderDataProject()}</ul>
      </main>
      <Form handleInputForm={handleInputForm} formInputs={formInputs} />
      <Footer />
    </>
  );
}

export default App;
