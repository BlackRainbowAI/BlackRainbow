#[allow(unused_attributes)]
#[cfg_attr(
	all(not(debug_assertions), target_os = "windows"),
	windows_subsystem = "windows"
)]
extern crate tauri;

use std::fs;

use tauri::{
	CustomMenuItem,
	Manager,
	SystemTray,
	SystemTrayEvent,
	SystemTrayMenu,
};

fn main() {
	tauri::Builder::default()
		.system_tray(
			SystemTray::new().with_menu(
				SystemTrayMenu::new()
					.add_item(CustomMenuItem::new(
						"devtools".to_string(),
						"Open Devtools",
					))
					.add_item(CustomMenuItem::new(
						"run".to_string(),
						"Run Scripts",
					))
					.add_item(CustomMenuItem::new("show".to_string(), "Show"))
					.add_item(CustomMenuItem::new("hide".to_string(), "Hide"))
					.add_item(CustomMenuItem::new("exit".to_string(), "Exit")),
			),
		)
		.on_system_tray_event(|app, event| {
			if let SystemTrayEvent::MenuItemClick { id, .. } = event {
				match id.as_str() {
					"devtools" => {
						app.windows().into_iter().for_each(
							|(_label, window)| {
								window.open_devtools();
							},
						)
					},
					"run" => {
						app.windows().into_iter().for_each(
							|(_label, window)| {
								window
									.eval(
										&fs::read_to_string(
											app.path_resolver()
												.resolve_resource(format!(
													"../Target/scripts/{}.js",
													window.label()
												))
												.expect(
													"Cannot resolve_resource.",
												),
										)
										.expect("Error while reading JS file."),
									)
									.expect(
										"Script did not execute successfully.",
									);

								window
									.eval(&format!(
										r#"
									var style = document.createElement('style');
									style.innerHTML = `{}`;
									style.setAttribute('data-from', 'tauri');
									document.head.appendChild(style);
								"#,
										&fs::read_to_string(
											app.path_resolver()
												.resolve_resource(format!(
													"../Target/styles/{}.css",
													window.label()
												))
												.expect(
													"cannot resolve_resource."
												)
										)
										.expect(
											"Error while reading CSS file."
										)
									))
									.expect("Style did not load successfully.");
							},
						)
					},
					"show" => {
						app.windows().into_iter().for_each(
							|(_label, window)| {
								window.show().unwrap();
							},
						);
					},
					"hide" => {
						app.windows().into_iter().for_each(
							|(_label, window)| {
								window.hide().unwrap();
							},
						);
					},
					"exit" => {
						std::process::exit(0);
					},
					_ => {},
				}
			}
		})
		.run(tauri::generate_context!())
		.expect("Error! Failed to run Tauri.");
}
