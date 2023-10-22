
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './shew-0-import.d.ts';
/**
 * Shew-0
 */

// WARN: Dependency not found: 'Gtk-4.0'
// WARN: Dependency not found: 'Gdk-4.0'
// WARN: Dependency not found: 'GObject-2.0'

export namespace Shew {

interface ExternalWindow {

    // Own properties of Shew-0.Shew.ExternalWindow

    readonly display: any

    // Own fields of Shew-0.Shew.ExternalWindow

    parent_instance: any

    // Owm methods of Shew-0.Shew.ExternalWindow

    get_display(): any
    set_parent_of(child_surface: any): void

    // Own virtual methods of Shew-0.Shew.ExternalWindow

    vfunc_set_parent_of(child_surface: any): void
}

class ExternalWindow {

    // Own properties of Shew-0.Shew.ExternalWindow

    static name: string

    // Constructors of Shew-0.Shew.ExternalWindow

    static new_from_handle(handle_str: string | null): ExternalWindow
}

interface WindowExporter {

    // Own properties of Shew-0.Shew.WindowExporter

    readonly window: any

    // Owm methods of Shew-0.Shew.WindowExporter

    export(callback: any | null): void
    export_finish(result: any): string | null
    unexport(): void
}

class WindowExporter {

    // Own properties of Shew-0.Shew.WindowExporter

    static name: string

    // Constructors of Shew-0.Shew.WindowExporter

    constructor(window: any) 
    static new(window: any): WindowExporter
}

interface ExternalWindowClass {

    // Own fields of Shew-0.Shew.ExternalWindowClass

    parent_class: any
    set_parent_of: (external_window: ExternalWindow, child_surface: any) => void
}

abstract class ExternalWindowClass {

    // Own properties of Shew-0.Shew.ExternalWindowClass

    static name: string
}

interface WindowExporterClass {

    // Own fields of Shew-0.Shew.WindowExporterClass

    parent_class: any
}

abstract class WindowExporterClass {

    // Own properties of Shew-0.Shew.WindowExporterClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default Shew;
// END