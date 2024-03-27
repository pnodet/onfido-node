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
 * @enum {string}
 */

export const ReportName = {
    Document: 'document',
    DocumentVideo: 'document_video',
    DocumentVideoWithAddressInformation: 'document_video_with_address_information',
    DocumentWithAddressInformation: 'document_with_address_information',
    DocumentWithDrivingLicenceInformation: 'document_with_driving_licence_information',
    DocumentWithDriverVerification: 'document_with_driver_verification',
    FacialSimilarityPhoto: 'facial_similarity_photo',
    FacialSimilarityPhotoFullyAuto: 'facial_similarity_photo_fully_auto',
    FacialSimilarityVideo: 'facial_similarity_video',
    FacialSimilarityMotion: 'facial_similarity_motion',
    KnownFaces: 'known_faces',
    IdentityEnhanced: 'identity_enhanced',
    WatchlistAml: 'watchlist_aml',
    WatchlistEnhanced: 'watchlist_enhanced',
    WatchlistStandard: 'watchlist_standard',
    WatchlistPepsOnly: 'watchlist_peps_only',
    WatchlistSanctionsOnly: 'watchlist_sanctions_only',
    ProofOfAddress: 'proof_of_address',
    UsDrivingLicence: 'us_driving_licence',
    DeviceIntelligence: 'device_intelligence',
    IndiaPan: 'india_pan',
    UnknownDefaultOpenApi: '11184809'
} as const;

export type ReportName = typeof ReportName[keyof typeof ReportName];



