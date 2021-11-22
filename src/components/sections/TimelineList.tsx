import styled from '@emotion/styled';
import { format } from 'date-fns';
import { FaMapMarkerAlt } from 'react-icons/fa';

import { SectionH3 } from 'src/components/sections/styleComponents';
import { font } from 'src/styles/font';
import { mediaQueryTarget } from 'src/styles/scalepoint';

export interface TimelineListItem {
    heading: string;
    dateStart: Date;
    dateEnd: Date | null;
    subheading: string;
    description: string[];
    location: string | null;
}

interface TimelineListProps {
    items: TimelineListItem[];
}

const LIST_ITEM_HEADER_AREA = 'list-item-header';
const LIST_ITEM_DESCRIPTION_AREA = 'list-item-description';

const RootList = styled.ol({
    margin: 0,
    padding: 0,
    listStyle: 'none',
});

const ListItem = styled.li({
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

const ListItemHeading = styled(SectionH3)({
    fontSize: '2.2rem',
});

const DescriptionHeading = styled.h4({
    margin: 0,
    fontWeight: 'bold',
    color: 'inherit',
    fontSize: '1.5rem',
    marginBottom: 10,
    lineHeight: font.lineHeight.heading,
});

const DescriptionList = styled.ol({
    listStyle: 'circle',
    margin: 0,
    paddingLeft: 20,
    paddingBottom: 10,
});

const DescriptionListItem = styled.li({
    ':not(:last-of-type)': {
        paddingBottom: 5,
    },
});

const Paragraph = styled.p({
    margin: 0,
    marginBottom: 10,
});

export const TimelineList = ({ items }: TimelineListProps) => (
    <RootList>
        {items.map((item, index) => (
            <ListItem key={index}>
                <ListItemHeaderArea>
                    <ListItemHeading>{item.heading}</ListItemHeading>
                    <Paragraph>
                        {format(item.dateStart, 'MMM yyyy')} -{' '}
                        {item.dateEnd
                            ? format(item.dateEnd, 'MMM yyyy')
                            : 'present'}
                    </Paragraph>
                </ListItemHeaderArea>
                <ListItemDescriptionArea>
                    <DescriptionHeading>{item.subheading}</DescriptionHeading>
                    <DescriptionList>
                        {item.description.map((descriptor) => (
                            <DescriptionListItem key={descriptor}>
                                {descriptor}
                            </DescriptionListItem>
                        ))}
                    </DescriptionList>
                    {item.location && (
                        <Paragraph>
                            <FaMapMarkerAlt /> {item.location}
                        </Paragraph>
                    )}
                </ListItemDescriptionArea>
            </ListItem>
        ))}
    </RootList>
);
