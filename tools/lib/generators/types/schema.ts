import type { Layer } from './common';

type CreateSource = string;
type CreateTemplate = string;

enum UpdateFileType {
    JSON = 'json',
    Routes = 'routes'
}

type UpdateSource = string;

type CreateTuple = [CreateSource, CreateTemplate]
type UpdateTuple = [UpdateSource, UpdateFileType]

type SchemaMethods = {
    create?: CreateTuple | CreateTuple[],
    update?: UpdateTuple | UpdateTuple[]
}

type Schema = {
    [key: string]: SchemaMethods
}

type SchemaConfig = {
    [key in Layer]: Schema
}

export type {
    UpdateSource,
    CreateSource,
    CreateTemplate,
    CreateTuple,
    UpdateTuple,
    Schema,
    SchemaConfig,
    SchemaMethods
};

export {
    UpdateFileType
};
