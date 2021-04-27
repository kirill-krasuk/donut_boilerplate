declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            HOST: string;
            PORT: number;
            API_HOST: string;
            SERVICE_WORKER_ENABLE: boolean;
            HYDRATE: boolean;
            OPEN_IN_BROWSER: boolean;
            WRITE_ASSETS_TO_DISK: boolean;
            DOCKER_TAG: string;
            DOCKER_CONFIG_PATH: string;
            DOCKER_CONTAINER_NAME: string;
            BUILD_ANALYZE: boolean;
            BUNDLE_ANALYZER_PORT: number;
        }
    }
}

export {};
