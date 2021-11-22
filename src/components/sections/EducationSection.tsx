import styled from '@emotion/styled';
import { format } from 'date-fns';
import { FaMapMarkerAlt } from 'react-icons/fa';

import { SECTION_ID } from 'src/components/navigation/Navigation';
import {
    DetailedListH3,
    DetailedListH4,
    Section,
    SectionCite,
    SectionQuote,
} from 'src/components/sections/styleComponents';
import { mediaQueryTarget } from 'src/styles/scalepoint';

const LIST_ITEM_HEADER_AREA = 'list-item-header';
const LIST_ITEM_DESCRIPTION_AREA = 'list-item-description';

const EducationList = styled.ol({
    margin: 0,
    padding: 0,
    listStyle: 'none',
});

const EducationListItem = styled.li({
    ':not(:last-of-type)': {
        paddingBottom: 15,
    },
    display: 'grid',
    gridTemplateAreas: `
        "${LIST_ITEM_HEADER_AREA}"
        "${LIST_ITEM_DESCRIPTION_AREA}"
    `,
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'repeat(auto)',
    gap: 0,
    [mediaQueryTarget.large]: {
        gridTemplateAreas: `
            "${LIST_ITEM_HEADER_AREA} ${LIST_ITEM_DESCRIPTION_AREA}"
        `,
        gridTemplateColumns: '1fr 2fr',
        gridTemplateRows: 'auto',
        gap: 30,
    },
});

const ListItemHeaderArea = styled.div({
    gridArea: LIST_ITEM_HEADER_AREA,
});

const ListItemDescriptionArea = styled.div({
    gridArea: LIST_ITEM_DESCRIPTION_AREA,
});

const DescriptionList = styled.ol({
    listStyle: 'circle',
    margin: 0,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
});

const Paragraph = styled.p({
    margin: 0,
    marginBottom: 10,
});

const educationItems = [
    {
        school: 'California Polytechnic State University',
        location: 'San Luis Obispo, CA',
        dateStart: new Date(2011, 8),
        dateEnd: new Date(2015, 2),
        educationType: 'Bachelor of Science',
        subject: 'Biological Sciences',
        description: [
            'Cumulative GPA: 4.0',
            'Graduated as the top-ranked student in the College of Science and Math',
        ],
    },
];

export const EducationSection = () => {
    return (
        <Section
            id={SECTION_ID.EDUCATION}
            title='Education'
            subtitle={
                <>
                    <SectionQuote>
                        The function of education is to teach one to think
                        intensively and to think critically. Intelligence plus
                        character - that is the goal of true education.
                    </SectionQuote>
                    <SectionCite>Martin Luther King, Jr.</SectionCite>
                </>
            }
        >
            <EducationList>
                {educationItems.map((item, index) => (
                    <EducationListItem key={index}>
                        <ListItemHeaderArea>
                            <DetailedListH3>{item.school}</DetailedListH3>
                            <Paragraph>
                                {format(item.dateStart, 'MMM yyyy')} -{' '}
                                {format(item.dateEnd, 'MMM yyyy')}
                            </Paragraph>
                        </ListItemHeaderArea>
                        <ListItemDescriptionArea>
                            <DetailedListH4>
                                {item.educationType} - {item.subject}
                            </DetailedListH4>
                            <DescriptionList>
                                {item.description.map((descriptor) => (
                                    <li key={descriptor}>{descriptor}</li>
                                ))}
                            </DescriptionList>
                            <Paragraph>
                                <FaMapMarkerAlt /> {item.location}
                            </Paragraph>
                        </ListItemDescriptionArea>
                    </EducationListItem>
                ))}
            </EducationList>
        </Section>
    );
};
