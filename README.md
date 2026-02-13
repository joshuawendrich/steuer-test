# Anwendung starten

Um die Anwendung zu starten, folgen Sie diesen Schritten:

1.  **Abhängigkeiten installieren:**
    Öffnen Sie Ihr Terminal im Projektverzeichnis und führen Sie den folgenden Befehl aus, um alle erforderlichen Abhängigkeiten zu installieren:
    ```bash
    npm install
    ```

2.  **Entwicklungsserver starten:**
    Nachdem die Abhängigkeiten installiert wurden, können Sie den Entwicklungsserver mit dem folgenden Befehl starten:
    ```bash
    npm run dev
    ```
    Die Anwendung wird normalerweise unter `http://localhost:5173` (oder einem anderen Port, der im Terminal angezeigt wird) verfügbar sein.

3.  **Anwendung für die Produktion bauen:**
    Um eine Produktionsversion der Anwendung zu erstellen, verwenden Sie den folgenden Befehl:
    ```bash
    npm run build
    ```
    Die gebauten Dateien finden Sie im `dist`-Verzeichnis.