/**
 * Normalize time to the format required for the video player
 * @param {num} seconds
 * @returns {string} For minutes and seconds E.g. 3 minutes and 45 secs = 03:45
 * or 25 secs = 00:25
 * For hour 4 hours = 04:00:00
 */
export declare const convertTimeToString: (secs: any) => string;
