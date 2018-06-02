import { normalize, schema } from 'normalizr';

const repositorySchema = new schema.Entity('repositories');

// or use shorthand syntax:
const repositoryListSchema = [ repositorySchema ];

export const normalizedData = (originalData) => normalize(originalData, repositoryListSchema);