import { normalize, schema } from 'normalizr';

const repositorySchema = new schema.Entity('repositories');

// or use shorthand syntax:
const repositoryListSchema = [ repositorySchema ];

export const normalizedDataRepositories = (originalData) => normalize(originalData, repositoryListSchema);



const contributorSchema = new schema.Entity('contributors');

// or use shorthand syntax:
const contributorListSchema = [ contributorSchema ];

export const normalizedDataContributors = (originalData) => normalize(originalData, contributorListSchema);