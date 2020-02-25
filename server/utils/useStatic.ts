import express from 'express';
import path    from 'path';

export const useStatic = (paths: string, options?: Record<string, any>): any => express.static(path.resolve(paths), options);
