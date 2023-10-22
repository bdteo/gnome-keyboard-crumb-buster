

type ICalGLib30 = typeof import('./icalglib-3.0.js').default;

declare global {
    export interface GjsGiImports {
        ICalGLib: ICalGLib30;
    }
}

export default GjsGiImports;


