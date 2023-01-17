import CareerListElement from "../../components/common/CareerListElement";
import EditDeleteControls from "../../components/common/EditDeleteControls";
import EducationListElement from "../../components/common/EducationListElement";
import ProjectListElement from "../../components/common/ProjectListElement";
import Section from "../../components/common/Section";
import SelfPresentationText from "../../components/common/SelfPresentationText";
import UserProfile from "../../components/common/UserProfile";

import pageStyles from "../styles.module.scss";
import styles from "./styles.module.scss";

const Sections = () => {
  const ProfileData = {
    id: 1,
    username: "jemega",
    email: "jmerlosg@hotmail.com",
    profileImage: "http://localhost:3001/assets/profiles/profile1.jpeg",
    firstName: "Jesus",
    lastName: "Merlos",
    age: 39,
    gender: "male",
    phone: "206 406 6747",
    address: "950 Marietta Street NW",
    address2: "apt 2318",
    country: "United States of America",
    state: "Georgia",
    zip: "30318",
  };

  const selfPresentation = {
    title: "Software Engineer",
    aboutMe: "This is my story...",
  };

  const careerData = [
    {
      id: 1,
      companyName: "Accenture",
      jobTitle: "React Developer",
      startDate: "12/12/2005",
      endDate: "12/12/2005",
      activities: "Do some development",
    },
  ];

  const educationData = [
    {
      id: 1,
      institution: "Universidad La Salle",
      degree: "Bachelors degree in computer science",
      startDate: "06/01/2001",
      endDate: "06/01/2005",
    },
  ];

  const projectData = [
    {
      id: 1,
      projectName: "My first project",
      startDate: "06/01/2001",
      endDate: "06/01/2005",
      description: "Test Project",
      images: [
        {
          id: 1,
          src: "https://learn.microsoft.com/es-es/visualstudio/data-tools/media/raddata-data-source-drag-operation.png?view=vs-2022",
        },
      ],
    },
  ];

  const handleEducationDelete = (elementId) => {
    console.log(elementId);
  };

  const handleEducationEdit = (elementId) => {
    console.log(elementId);
  };

  const handleCareerDelete = (elementId) => {
    console.log(elementId);
  };

  const handleCareerEdit = (elementId) => {
    console.log(elementId);
  };

  const handleProjectDelete = (elementId) => {
    console.log(elementId);
  };

  const handleProjectEdit = (elementId) => {
    console.log(elementId);
  };

  const handleProfileEdit = (elementId) => {
    console.log(elementId);
  };

  const handleSelfPresentationEdit = (elementId) => {
    console.log(elementId);
  };

  return (
    <div>
      <Section title="Profile">
        <UserProfile
          profileData={ProfileData}
          controls={
            <EditDeleteControls
              elementId={ProfileData.id}
              onEdit={handleProfileEdit}
            />
          }
        />
      </Section>
      <Section title="About Me">
        <SelfPresentationText
          selfPresentationData={selfPresentation}
          controls={
            <EditDeleteControls
              elementId={ProfileData.id}
              onEdit={handleSelfPresentationEdit}
            />
          }
        />
      </Section>
      <Section title="Career">
        {careerData.map((career) => (
          <CareerListElement
            key={`career-${career.id}`}
            careerData={career}
            elementControls={
              <EditDeleteControls
                elementId={career.id}
                onEdit={handleCareerEdit}
                onDelete={handleCareerDelete}
              />
            }
          />
        ))}
      </Section>
      <Section title="Education">
        {educationData.map((education) => (
          <EducationListElement
            key={`education-${education.id}`}
            educationData={education}
            elementControls={
              <EditDeleteControls
                elementId={education.id}
                onEdit={handleEducationEdit}
                onDelete={handleEducationDelete}
              />
            }
          />
        ))}
      </Section>
      <Section title="Projects">
        {projectData.map((project) => (
          <ProjectListElement
            key={`project-${project.id}`}
            projectData={project}
            elementControls={
              <EditDeleteControls
                elementId={project.id}
                onEdit={handleProjectEdit}
                onDelete={handleProjectDelete}
              />
            }
          />
        ))}
      </Section>
    </div>
  );
};

export default Sections;
