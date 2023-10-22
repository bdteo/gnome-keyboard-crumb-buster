/* extension.js
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 */
import GLib from 'gi://GLib?version=2.0';
import GObject from 'gi://GObject';

import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import { Extension, gettext as _ } from 'resource:///org/gnome/shell/extensions/extension.js';
import { QuickToggle, SystemIndicator } from 'resource:///org/gnome/shell/ui/quickSettings.js';

const KeyboardToggle = GObject.registerClass(
  class KeyboardToggle extends QuickToggle {
    constructor() {
      super({
        title: _('Toggle Keyboard'),
        iconName: 'input-keyboard-symbolic',
        toggleMode: true,
      });

      this.connect('clicked', this._onClick.bind(this));
    }

    _onClick() {
      if (this.checked)
        GLib.spawn_command_line_sync('setxkbmap -layout us');
      else
        GLib.spawn_command_line_sync('setxkbmap -layout null');
    }
  }
);

const KeyboardIndicator = GObject.registerClass(
  class KeyboardIndicator extends SystemIndicator {
    constructor() {
      super();

      this._indicator = this._addIndicator();
      this._indicator.iconName = 'input-keyboard-symbolic';

      const toggle = new KeyboardToggle();
      toggle.bind_property('checked',
        this._indicator, 'visible',
        GObject.BindingFlags.SYNC_CREATE);
      this.quickSettingsItems.push(toggle);
    }
  }
);

export default class KeyboardSettingsExtension extends Extension {
  enable() {
    this._indicator = new KeyboardIndicator();
    Main.panel.statusArea.quickSettings.addExternalIndicator(this._indicator);
  }

  disable() {
    this._indicator.quickSettingsItems.forEach(item => item.destroy());
    this._indicator.destroy();
  }
}
