import { ShallowWrapper as EnzymeShallowWrapper, ReactWrapper } from 'enzyme';

export type ShallowWrapper = EnzymeShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
export type MountWrapper = ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
export type Wrapper = ShallowWrapper | MountWrapper;
