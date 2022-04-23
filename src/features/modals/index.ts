import { Greeting }  from './greeting/Greeting';
import { ModalTest } from './modal-test/ModalTest';

export * as modalsModel from './model';

export type { ModalHasHistory, CallModalObjectPayload } from './types';
export { Modals } from './types/enums';

const modalsMap = {
	Greeting,
	ModalTest
};

export { modalsMap };
