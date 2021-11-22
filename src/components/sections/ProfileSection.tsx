import styled from '@emotion/styled';
import { darken } from 'polished';

import SelfPortrait from 'src/assets/images/self-portrait.jpg';
import CapperResume from 'src/assets/pdfs/Capper-Resume.pdf';
import { SECTION_ID } from 'src/components/navigation/Navigation';
import { Section, SectionH3 } from 'src/components/sections/styleComponents';
import { border } from 'src/styles/border';
import { colors } from 'src/styles/colors';
import { mediaQueryTarget } from 'src/styles/scalepoint';

const PROFILE_PIC_AREA = 'profile-pic';
const ABOUT_ME_AREA = 'about-me';
const DETAILS_AREA = 'details';

const Layout = styled.div({
    textAlign: 'center',
    display: 'grid',
    gridTemplateAreas: `
        "${ABOUT_ME_AREA}"
        "${PROFILE_PIC_AREA}"
        "${DETAILS_AREA}"
    `,
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'repeat(3, auto)',
    rowGap: 20,
    columnGap: 20,
    [mediaQueryTarget.medium]: {
        textAlign: 'left',
        gridTemplateAreas: `
            "${ABOUT_ME_AREA} ${ABOUT_ME_AREA}"
            "${PROFILE_PIC_AREA} ${DETAILS_AREA}"
        `,
        gridTemplateColumns: '50% 40%',
        gridTemplateRows: 'repeat(2, auto)',
        columnGap: '10%',
    },
    [mediaQueryTarget.xlarge]: {
        gridTemplateAreas: `
            "${PROFILE_PIC_AREA} ${ABOUT_ME_AREA} ${DETAILS_AREA}"
        `,
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'auto',
        columnGap: 30,
    },
});

const AboutMeArea = styled.div({
    gridArea: ABOUT_ME_AREA,
});

const ProfilePicArea = styled.div({
    gridArea: PROFILE_PIC_AREA,
    justifySelf: 'center',
    [mediaQueryTarget.medium]: {
        justifySelf: 'end',
    },
});

const DetailsArea = styled.div({
    gridArea: DETAILS_AREA,
});

const AreaHeading = styled(SectionH3)({
    marginBottom: 10,
});

const Paragraph = styled.p({
    margin: 0,
});

const ProfilePic = styled.img({
    borderWidth: 15,
    borderStyle: 'solid',
    borderColor: colors.light,
    borderRadius: '50%',
    width: '100%',
    height: 'auto',
    maxWidth: 300,
    [mediaQueryTarget.medium]: {
        maxWidth: 250,
    },
    [mediaQueryTarget.xlarge]: {
        maxWidth: 300,
    },
});

const DetailsList = styled.dl({
    margin: 0,
    marginBottom: 20,
});

const DescriptionTerm = styled.dt({
    fontWeight: 700,
});

const DescriptionDetails = styled.dd({
    margin: 0,
});

const Link = styled.a({
    color: 'inherit',
    textDecoration: 'none',
    ':hover, :focus': {
        textDecoration: 'underline',
    },
    ':active': {
        color: colors.primary,
    },
});

const DownloadResume = styled.a({
    display: 'inline-block',
    textAlign: 'center',
    backgroundColor: colors.primary,
    color: colors.white,
    padding: '1rem',
    borderRadius: border.radius,
    textDecoration: 'none',
    ':hover, :focus': {
        backgroundColor: darken(0.08, colors.primary),
    },
    ':active': {
        backgroundColor: colors.secondary,
    },
});

function calculateAge(birthMonth: number, birthDay: number, birthYear: number) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    let age = currentYear - birthYear;

    if (currentMonth < birthMonth - 1) {
        age--;
    }
    if (birthMonth - 1 === currentMonth && currentDay < birthDay) {
        age--;
    }

    return age;
}

export const ProfileSection = () => {
    return (
        <Section
            id={SECTION_ID.PROFILE}
            title='Profile'
            subtitle='I’m a full-stack developer who unites logic with creativity'
        >
            <Layout>
                <AboutMeArea>
                    <AreaHeading>About me</AreaHeading>
                    <Paragraph>
                        I am a self-taught and highly motivated full-stack
                        developer. After discovering my passion for programming
                        in the summer of 2016, I have dedicated each day to
                        increasing my knowledge and skill in the field of web
                        development. My perfectionistic tendencies lend well
                        toward efficient, DRY code and elegant page layouts. I
                        strive to be the best at what I do, while working
                        hand-in-hand with my peers to raise up the team as a
                        whole.
                    </Paragraph>
                </AboutMeArea>
                <ProfilePicArea>
                    <ProfilePic
                        alt='Graduation picture of Shannon'
                        src={SelfPortrait}
                        width={300}
                        height={300}
                    />
                </ProfilePicArea>
                <DetailsArea>
                    <AreaHeading>Details</AreaHeading>
                    <DetailsList>
                        <DescriptionTerm>Name</DescriptionTerm>
                        <DescriptionDetails>
                            Shannon L Capper
                        </DescriptionDetails>
                        <DescriptionTerm>Age</DescriptionTerm>
                        <DescriptionDetails>
                            {calculateAge(2, 19, 1993)} years
                        </DescriptionDetails>
                        <DescriptionTerm>Location</DescriptionTerm>
                        <DescriptionDetails>Bellevue, WA</DescriptionDetails>
                        <DescriptionTerm>GitHub</DescriptionTerm>
                        <DescriptionDetails>
                            <Link
                                href='https://github.com/ShannonLCapper'
                                rel='noreferrer noopener'
                                target='_blank'
                            >
                                github.com/&#8203;ShannonLCapper
                            </Link>
                        </DescriptionDetails>
                    </DetailsList>
                    <DownloadResume
                        href={CapperResume}
                        target='_blank'
                        download='Capper-Resume.pdf'
                    >
                        Download resume as PDF
                    </DownloadResume>
                </DetailsArea>
            </Layout>
        </Section>
    );
};
