
document.addEventListener("DOMContentLoaded", () => {
    const turnOn = document.getElementById("toggle");

    turnOn.addEventListener("click", async () => {
        let result = await chrome.storage.local.get(["protectionEnabled"]);
        let protectionEnabled = result.protectionEnabled ?? false;
        protectionEnabled = !protectionEnabled;

        console.log("Protection Enabled");
        
        await chrome.storage.local.set({ protectionEnabled });
        turnOn.textContent = protectionEnabled ? "SafeBrowsing: ON" : "SafeBrowsing: OFF";
    });

    // Load saved state
    chrome.storage.local.get(["protectionEnabled"], (result) => {
        let protectionEnabled = result.protectionEnabled ?? false;
        
        console.log("State stored, Toggle change.");

        turnOn.textContent = protectionEnabled ? "SafeBrowsing: ON" : "SafeBrowsing: OFF";
    });
});

