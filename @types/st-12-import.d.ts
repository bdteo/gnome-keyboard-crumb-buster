

type St12 = typeof import('./st-12.js').default;

declare global {
    export interface GjsGiImports {
        St: St12;
    }
}

export default GjsGiImports;


