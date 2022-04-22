import { Greeting }  from './greeting/Greeting';
import { ModalTest } from './modal-test/ModalTest';

export * as modalsModel from './model';

export type { ModalHasHistory, CallModalObjectPayload } from './types';
export { Modals } from './types/enums';

export const modalsMap = {
	Greeting,
	ModalTest,
};
