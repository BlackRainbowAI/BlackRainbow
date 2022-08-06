#![cfg_attr(all(not(debug_assertions), target_os = "windows"), windows_subsystem = "windows")]

use std::{cell::RefCell, collections::HashMap};
use tauri::{CustomMenuItem, Manager, SystemTray, SystemTrayEvent, SystemTrayMenu};

use std::fs;
use wry::{application::window::WindowId, webview::WebView};

fn main() {
	thread_local! {
		static WEBVIEWS: RefCell<HashMap<WindowId, WebView>> = RefCell::new(HashMap::new());
	}

	tauri::Builder::default()
		.setup(|app| {
			app.windows().into_iter().for_each(|(_label, window)| {
				let resource_path = app
					.path_resolver()
					.resolve_resource(format!("../dist/{}.js", _label))
					.expect("Failed to resolve resource dir.");

				let read = &fs::read_to_string(resource_path).expect("Error while reading file.");

				window.eval(read).expect("Script did not execute successfully.");

				window
					.with_webview(move |webview| {
						if _label == "fa" {
							#[cfg(windows)]
							unsafe {
								webview.controller().SetZoomFactor(1.6).unwrap();
							}
						}
					})
					.expect("WebView Follow Aircraft did not zoom.");
			});

			Ok(())
		})
		.system_tray(
			SystemTray::new().with_menu(
				SystemTrayMenu::new()
					.add_item(CustomMenuItem::new("show".to_string(), "Show"))
					.add_item(CustomMenuItem::new("hide".to_string(), "Hide"))
					.add_item(CustomMenuItem::new("exit".to_string(), "Exit")),
			),
		)
		.on_system_tray_event(|app, event| {
			if let SystemTrayEvent::MenuItemClick { id, .. } = event {
				match id.as_str() {
					"show" => {
						app.windows().into_iter().for_each(|(_label, window)| {
							window.show().unwrap();
						});
					}
					"hide" => {
						app.windows().into_iter().for_each(|(_label, window)| {
							window.hide().unwrap();
						});
					}
					"exit" => {
						std::process::exit(0);
					}
					_ => {}
				}
			}
		})
		.run(tauri::generate_context!())
		.expect("Error! Failed to run Tauri.");
}
