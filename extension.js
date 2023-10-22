// Project: crumb-buster
// Created by: Boris Teoharov
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 2 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// SPDX-License-Identifier: GPL-2.0-or-later
const {GObject, St, GLib} = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;
const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;
const PopupMenu = imports.ui.popupMenu;

const GETTEXT_DOMAIN = 'crumb-buster';
const _ = ExtensionUtils.gettext;

const Indicator = GObject.registerClass(
  class Indicator extends PanelMenu.Button {
    _init() {
      super._init(0.0, _('Keyboard Cleaner'));

      this.add_child(new St.Icon({
        icon_name: 'input-keyboard-symbolic',
        style_class: 'system-status-icon',
      }));

      let enableItem = new PopupMenu.PopupMenuItem(_('Enable Keyboard'));
      enableItem.connect('activate', this._enableKeyboard.bind(this));
      this.menu.addMenuItem(enableItem);

      let disableItem = new PopupMenu.PopupMenuItem(_('Disable Keyboard'));
      disableItem.connect('activate', this._disableKeyboard.bind(this));
      this.menu.addMenuItem(disableItem);
    }

    _enableKeyboard() {
      GLib.spawn_command_line_sync('xinput enable [device_id]');
    }

    _disableKeyboard() {
      GLib.spawn_command_line_sync('xinput disable [device_id]');
    }
  });

class Extension {
  constructor(uuid) {
    this._uuid = uuid;
    ExtensionUtils.initTranslations(GETTEXT_DOMAIN);
  }

  enable() {
    this._indicator = new Indicator();
    Main.panel.addToStatusArea(this._uuid, this._indicator);
  }

  disable() {
    this._indicator.destroy();
    this._indicator = null;
  }
}

// noinspection JSUnusedGlobalSymbols
/**
 * @param {object} meta - metadata.json
 */
// eslint-disable-next-line no-unused-vars
function init(meta) {
  return new Extension(meta.uuid);
}
