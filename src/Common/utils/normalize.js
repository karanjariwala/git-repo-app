import { normalize, schema } from 'normalizr';

const repositorySchema = new schema.Entity('repositories');
const repositoryListSchema = [ repositorySchema ];
export const normalizedDataRepositories = (originalData) => normalize(originalData, repositoryListSchema);


/* 
    - This is the basic use of normalizr to make the Array of objects normalized into entity based object structure.
    - Entity Object structure helps keep data at only one place. Thereby avoiding duplication of data. 
    - Removes un-necessary nesting therby simplifyiing reducer logic.
    - https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape
    - This is basic schema to be extended depending on usecase/complexity.
*/

const contributorSchema = new schema.Entity('contributors');
const contributorListSchema = [ contributorSchema ];
export const normalizedDataContributors = (originalData) => normalize(originalData, contributorListSchema);

