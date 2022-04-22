import path    from 'node:path';
import express from 'express';

const useStaticFiles = (paths: string, options?: Record<string, any>): any => express.static(path.resolve(paths), options);

export { useStaticFiles };
