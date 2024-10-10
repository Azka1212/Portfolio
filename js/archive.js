// Updated archive.js for displaying archived GitHub projects dynamically

async function get_repos() {
    let result = await fetch("https://api.github.com/users/Azka1212/repos");
    let response = await result.json();
    return response;
}

(async function () {
    try {
        console.log('Fetching GitHub repositories for the archive section...');
        let repos = await get_repos();
        display_archived_projects(repos);  // Display all projects in the archive section
    } catch (err) {
        console.error('Error fetching GitHub repositories:', err.message);
    }
})();

// Display archived projects dynamically in the archive section
function display_archived_projects(data) {
    const container = document.getElementById("other_projects");
    data.forEach((result) => {
        const content = `
            <div class="portfolio-box">
                <img src="./images/projects_placeholder.png" alt="Project Placeholder Image" />
                <div class="portfolio-layer">
                    <h4>${result.name}</h4>
                    <p>${result.description ? result.description : 'No description available'}</p>
                    <a href="${result.html_url}" target="_blank"><i class="bx bx-link-external"></i></a>
                </div>
            </div>`;

        container.innerHTML += content;
    });
}
