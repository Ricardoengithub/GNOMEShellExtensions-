const Clutter = imports.gi.Clutter;
const St = imports.gi.St;
const Main = imports.ui.main;
const GLib = imports.gi.GLib;

let label;
let aggregateMenu;
let children;
let dt = new Date();

function init() {
  label = new St.Label({ text: getYear(), y_align: Clutter.ActorAlign.CENTER, x_align: Clutter.ActorAlign.CENTER, style_class: "year-label" });
  aggregateMenu = Main.panel.statusArea["aggregateMenu"];
  powerIndicator = aggregateMenu._power.indicators;
}

function getYear(){
	var x = dt.getYear() + 1900;
	return x.toString();
}

function enable() {
  powerIndicator.add_child(label);
}

function disable() {
  powerIndicator.remove_child(label);
}
