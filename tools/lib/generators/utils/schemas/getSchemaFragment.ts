import type { SchemaMethods } from '../../types/schema';

const getSchemaFragment = <T extends SchemaMethods>(isNeedSchema: boolean, schema: T) =>
	(isNeedSchema
		? schema
		: ({} as SchemaMethods));

export { getSchemaFragment };
