const fromServerData = (containerID: string) => document.querySelector(`#${ containerID }`);

const clearContainer = (container: Element | null) => container?.remove();

const clearServerDataContainer = () => {
	[ 'ssr-store', 'initial-props' ].map(fromServerData).forEach(clearContainer);
};

export { clearServerDataContainer };
