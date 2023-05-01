extern crate tauri;

#[cfg_attr(all(not(debug_assertions), target_os = "windows"), windows_subsystem = "windows")]
use std::fs;
use tauri::{CustomMenuItem, Manager, SystemTray, SystemTrayEvent, SystemTrayMenu, WindowEvent};

fn main() {
	tauri::Builder::default()
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
		.on_window_event( |event| match event.event() {
			WindowEvent::Focused(_focused) => {
				event.window().eval(
					&fs::read_to_string(
						event.window().app_handle().path_resolver()
							.resolve_resource(format!("../dist/scripts/{}.js", event.window().label()))
							.expect("Failed to resolve resource dir."),
					)
					.expect("Error while reading JS file."),
				)
				.expect("Script did not execute successfully.");

			event.window()
				.eval(&format!(
					r#"var style = document.createElement('style'); style.innerHTML = `{}`; document.head.appendChild(style);"#,
					&fs::read_to_string(
						event.window().app_handle().path_resolver()
							.resolve_resource(format!("../dist/styles/{}.css", event.window().label()))
							.expect("Failed to resolve resource dir.")
					)
					.expect("Error while reading CSS file.")
				))
				.expect("Style did not load successfully.");
			}
			_ => {}
		})
		.run(tauri::generate_context!())
		.expect("Error! Failed to run Tauri.");
}
