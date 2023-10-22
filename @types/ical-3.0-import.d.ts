

type ICal30 = typeof import('./ical-3.0.js').default;

declare global {
    export interface GjsGiImports {
        ICal: ICal30;
    }
}

export default GjsGiImports;


