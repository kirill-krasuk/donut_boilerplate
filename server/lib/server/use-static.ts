import express from 'express';
import path    from 'node:path';

export const useStaticFiles = (
    paths: string,
    options?: Record<string, any>
): any => express.static(path.resolve(paths), options);
