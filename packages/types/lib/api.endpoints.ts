import type { EndpointMethod } from './api';
import type { GetOperation, SearchOperations } from './logs/api';
import type { GetOnboardingStatus } from './onboarding/api';

export type APIEndpoints = SearchOperations | GetOperation | GetOnboardingStatus;

/**
 * Automatically narrow endpoints type with Method + Path
 */
export type APIEndpointsPicker<TMethod extends EndpointMethod, TPath extends APIEndpoints['Path']> = Extract<APIEndpoints, { Method: TMethod; Path: TPath }>;

/**
 * Automatically narrow endpoints type with Path
 * Useful to get allowed methods
 */
export type APIEndpointsPickerWithPath<TPath extends APIEndpoints['Path']> = Extract<APIEndpoints, { Path: TPath }>;
