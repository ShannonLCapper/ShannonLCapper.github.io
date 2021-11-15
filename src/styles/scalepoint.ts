import { useMedia } from 'react-use';

type MediaQueryIndexable<T> = {
    xsmall: T;
    small: T;
    medium: T;
    large: T;
    xlarge: T;
};

const scalepoint: MediaQueryIndexable<number> = {
    xsmall: 400,
    small: 500,
    medium: 768,
    large: 992,
    xlarge: 1200,
} as const;

const XSMALL_MEDIA_QUERY = `(min-width: ${scalepoint.xsmall}px)`;
const SMALL_MEDIA_QUERY = `(min-width: ${scalepoint.small}px)`;
const MEDIUM_MEDIA_QUERY = `(min-width: ${scalepoint.medium}px)`;
const LARGE_MEDIA_QUERY = `(min-width: ${scalepoint.large}px)`;
const XLARGE_MEDIA_QUERY = `(min-width: ${scalepoint.xlarge}px)`;

export const mediaQueryTarget: MediaQueryIndexable<string> = {
    xsmall: `@media ${XSMALL_MEDIA_QUERY}`,
    small: `@media ${SMALL_MEDIA_QUERY}`,
    medium: `@media ${MEDIUM_MEDIA_QUERY}`,
    large: `@media ${LARGE_MEDIA_QUERY}`,
    xlarge: `@media ${XLARGE_MEDIA_QUERY}`,
} as const;

/**
 * Hooks that will return true when the device matches a specific media query target.
 */
export const useMediaQueryTarget: MediaQueryIndexable<() => boolean> = {
    /* eslint-disable react-hooks/rules-of-hooks */
    xsmall: () => useMedia(XSMALL_MEDIA_QUERY),
    small: () => useMedia(SMALL_MEDIA_QUERY),
    medium: () => useMedia(MEDIUM_MEDIA_QUERY),
    large: () => useMedia(LARGE_MEDIA_QUERY),
    xlarge: () => useMedia(XLARGE_MEDIA_QUERY),
    /* eslint-enable react-hooks/rules-of-hooks */
} as const;
