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



/**
 * 
 * @export
 * @interface DocumentCDQReasons
 */
export interface DocumentCDQReasons {
    /**
     * When data points are obscured to the point that we cannot confirm if the fonts match the expected ones.
     * @type {string}
     * @memberof DocumentCDQReasons
     */
    'obscured_data_points'?: string;
    /**
     * When a critical security feature is obscured. This can also refer to when the holder\'s wet signature, necessary for the document to be valid, is not present.
     * @type {string}
     * @memberof DocumentCDQReasons
     */
    'obscured_security_features'?: string;
    /**
     * One of 3 reasons (1) OCR Assisted Scans (i.e. when you\'re able to move the mouse and highlight part of text), (2) Severely Washed out Background, (3) Overlapping Text.
     * @type {string}
     * @memberof DocumentCDQReasons
     */
    'abnormal_document_features'?: string;
    /**
     * Any digital text or electronic watermarks on the document.
     * @type {string}
     * @memberof DocumentCDQReasons
     */
    'watermarks_digital_text_overlay'?: string;
    /**
     * If the corner has been physically cut off. This can be found on some documents that are no longer valid.
     * @type {string}
     * @memberof DocumentCDQReasons
     */
    'corner_removed'?: string;
    /**
     * A punched hole is present.
     * @type {string}
     * @memberof DocumentCDQReasons
     */
    'punctured_document'?: string;
    /**
     * When the back of a document is needed for processing, but is not available.
     * @type {string}
     * @memberof DocumentCDQReasons
     */
    'missing_back'?: string;
    /**
     * When a document has been published digitally, there aren\'t enough security features to review so we cannot perform a full fraud assessment.
     * @type {string}
     * @memberof DocumentCDQReasons
     */
    'digital_document'?: string;
}

