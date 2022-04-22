import type { SchemaMethods } from '../../types/schema';

export function getSchemaFragment<T extends SchemaMethods>(isNeedSchema: boolean, schema: T) {
	return isNeedSchema ? schema : ({} as SchemaMethods);
}
