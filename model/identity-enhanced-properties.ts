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
import { IdentityEnhancedPropertiesMatchedAddressesInner } from './identity-enhanced-properties-matched-addresses-inner';

/**
 * 
 * @export
 * @interface IdentityEnhancedProperties
 */
export interface IdentityEnhancedProperties {
    /**
     * Returns address number which has been matched.
     * @type {number}
     * @memberof IdentityEnhancedProperties
     */
    'matched_address'?: number;
    /**
     * Returns array of sources which contain matched addresses for the corresponding address number.
     * @type {Array<IdentityEnhancedPropertiesMatchedAddressesInner>}
     * @memberof IdentityEnhancedProperties
     */
    'matched_addresses'?: Array<IdentityEnhancedPropertiesMatchedAddressesInner>;
}

