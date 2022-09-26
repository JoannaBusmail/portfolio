import '../styles/App.scss';

import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';

import About from './About';
import Header from './Header';
import Search from './Search';
import ListProjects from './ListProjects';
import Form from './Form';
import Footer from './Footer';
import ProjectDetail from './ProjectDetail';

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
    return filter.map((projects, id) => {
      return <ListProjects key={id} projects={projects} />;
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

  const { pathname } = useLocation();
  console.log(pathname);
  const dataPath = matchPath('/project/:projectId', pathname);
  console.log(dataPath);

  const projectId = dataPath !== null ? dataPath.params.projectId : null;
  const projectFound = dataProjects.find((project) => project.id === projectId);

  console.log({ projectId, projectFound, dataProjects });

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <main>
                <About />
                <Search
                  handleSearchTool={handleSearchTool}
                  searchTools={searchTools}
                />
                {notFound()}
                <ul className='list-projects_container'>
                  {' '}
                  {renderDataProject()}
                </ul>
              </main>
              <Form handleInputForm={handleInputForm} formInputs={formInputs} />
              <Footer />
            </>
          }
        />

        <Route
          path='/project/:projectId'
          element={<ProjectDetail project={projectFound} />}
        />
      </Routes>
    </>
  );
}

export default App;
