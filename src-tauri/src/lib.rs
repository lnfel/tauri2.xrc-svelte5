#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

/**
 * https://v2.tauri.app/start/migrate/from-tauri-1/#preparing-for-mobile
 */
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
