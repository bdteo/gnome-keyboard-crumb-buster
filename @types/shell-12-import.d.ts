

type Shell12 = typeof import('./shell-12.js').default;

declare global {
    export interface GjsGiImports {
        Shell: Shell12;
    }
}

export default GjsGiImports;


