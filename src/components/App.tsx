import React from 'react';

import { GlobalStyles } from 'src/components/GlobalStyles';
import { Jumbotron } from 'src/components/jumbotron/Jumbotron';
import { Navigation } from 'src/components/navigation/Navigation';
import { ContactSection } from 'src/components/sections/ContactSection';
import { EducationSection } from 'src/components/sections/EducationSection';
import { ProfileSection } from 'src/components/sections/ProfileSection';
import { ProjectsSection } from 'src/components/sections/ProjectsSection';
import { SkillsSection } from 'src/components/sections/SkillsSection';
import { WorkExperienceSection } from 'src/components/sections/WorkExperienceSection';

export const App = () => {
    return (
        <>
            <GlobalStyles />
            <header>
                <Jumbotron />
            </header>
            <Navigation />
            <main>
                <ProfileSection />
                <WorkExperienceSection />
                <SkillsSection />
                <ProjectsSection />
                <EducationSection />
                <ContactSection />
            </main>
        </>
    );
};
