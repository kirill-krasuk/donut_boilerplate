import { HelmetDatum } from 'react-helmet';

export type StaticTemplate = {
    [key: string]: string | HelmetDatum;
}
