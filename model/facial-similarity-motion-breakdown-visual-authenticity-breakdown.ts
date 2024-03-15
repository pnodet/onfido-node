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
import { FacialSimilarityMotionBreakdownVisualAuthenticityBreakdownSpoofingDetection } from './facial-similarity-motion-breakdown-visual-authenticity-breakdown-spoofing-detection';
// May contain unused imports in some cases
// @ts-ignore
import { FacialSimilarityVideoBreakdownVisualAuthenticityBreakdownLivenessDetected } from './facial-similarity-video-breakdown-visual-authenticity-breakdown-liveness-detected';

/**
 * 
 * @export
 * @interface FacialSimilarityMotionBreakdownVisualAuthenticityBreakdown
 */
export interface FacialSimilarityMotionBreakdownVisualAuthenticityBreakdown {
    /**
     * 
     * @type {FacialSimilarityVideoBreakdownVisualAuthenticityBreakdownLivenessDetected}
     * @memberof FacialSimilarityMotionBreakdownVisualAuthenticityBreakdown
     */
    'liveness_detected'?: FacialSimilarityVideoBreakdownVisualAuthenticityBreakdownLivenessDetected;
    /**
     * 
     * @type {FacialSimilarityMotionBreakdownVisualAuthenticityBreakdownSpoofingDetection}
     * @memberof FacialSimilarityMotionBreakdownVisualAuthenticityBreakdown
     */
    'spoofing_detection'?: FacialSimilarityMotionBreakdownVisualAuthenticityBreakdownSpoofingDetection;
}

