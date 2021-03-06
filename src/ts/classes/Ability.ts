/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

class Ability {
  id: string;
  icon: string;
  cooldowns: any[] = [];
  duration: number;
  triggerTimeOffset: number;
  name: string;
  tooltip: string;

  buttons: any[] = [];
  awaitingUpdate: { (a: Ability): any }[] = null;

  constructor(ability = <Ability>{}) {
    this.id = ability.id || "";
    this.icon = ability.icon || "";
    this.cooldowns = ability.cooldowns || [];
    this.duration = ability.duration || 0;
    this.triggerTimeOffset = ability.triggerTimeOffset || 0;
    this.name = ability.name || "";
    this.tooltip = ability.tooltip || "";
    this.buttons = ability.buttons || [];
    this.awaitingUpdate = ability.awaitingUpdate || null;
  }

  static create() {
    let a = new Ability();
    return a;
  }

}

export default Ability;
