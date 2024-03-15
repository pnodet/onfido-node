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
 * @interface VideoReasons
 */
export interface VideoReasons {
    /**
     * Flags when evidence is found that a fake webcam was used.
     * @type {string}
     * @memberof VideoReasons
     */
    'fake_webcam'?: string;
    /**
     * Flags when evidence is found that the video was uploaded in an attempt to circumvent the randomness of the speaking and head turn challenges
     * @type {string}
     * @memberof VideoReasons
     */
    'challenge_reuse'?: string;
    /**
     * Flags when evidence is found that an Android emulator was used.
     * @type {string}
     * @memberof VideoReasons
     */
    'emulator'?: string;
    /**
     * Additional comma separated details such as the name of the fake webcam.
     * @type {string}
     * @memberof VideoReasons
     */
    'reasons'?: string;
}

