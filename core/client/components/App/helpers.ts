const fromServerData = (containerID: string) => document.getElementById(containerID);

const clearContainer = (container: HTMLElement | null) => container
    && container.parentNode
    && container.parentNode.removeChild(container);

export const clearServerDataContainer = () => {
    [ 'ssr-store', 'initial-props' ]
        .map(fromServerData)
        .forEach(clearContainer);
};
