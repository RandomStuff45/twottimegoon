document.getElementById('submitBtn').addEventListener('click', function() {
    const code = document.getElementById('codeInput').value.trim();
    const message = document.getElementById('message');

    // Map codes to file names
    const codeFiles = {
        "CODE1": "file1.txt",
        "CODE2": "file2.txt",
        "CODE3": "file3.txt",
        "CODE4": "file4.txt",
        "CODE5": "file5.txt"
    };

    if (codeFiles[code]) {
        // Create a hidden link and trigger download
        const link = document.createElement('a');
        link.href = codeFiles[code];
        link.download = codeFiles[code];
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        message.textContent = "HA! YOU WILL NEVER GET THE GOONING SIM";
    }
});