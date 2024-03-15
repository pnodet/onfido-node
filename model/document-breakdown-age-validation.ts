/* tslint:disable */
/* eslint-disable */
/**
 * Onfido API v3.6
 * The Onfido API
 *
 * The version of the OpenAPI document: 3.6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { DocumentBreakdownAgeValidationBreakdown } from './document-breakdown-age-validation-breakdown';

/**
 * Asserts whether the age calculated from the document\'s date of birth data point is greater than or equal to the minimum accepted age.
 * @export
 * @interface DocumentBreakdownAgeValidation
 */
export interface DocumentBreakdownAgeValidation {
    /**
     * 
     * @type {string}
     * @memberof DocumentBreakdownAgeValidation
     */
    'result'?: string;
    /**
     * 
     * @type {DocumentBreakdownAgeValidationBreakdown}
     * @memberof DocumentBreakdownAgeValidation
     */
    'breakdown'?: DocumentBreakdownAgeValidationBreakdown;
}

