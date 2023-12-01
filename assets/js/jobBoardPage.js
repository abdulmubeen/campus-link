let arrayapplied = []; // Initialize an empty array to keep track of applied jobs

// Function to display all job listings
function CheckAll() {
    const allButton = document.getElementById("All");
    const appliedButton = document.getElementById("Applied");
    allButton.style.background = "green";
    appliedButton.style.background = "#0f9bffed";

    const jobCards = document.querySelectorAll("#job-list .job-card");
    jobCards.forEach(job => {
        job.style.display = "block";
    });
}

// Function to filter and display only applied job listings
function CheckApplied() {
    const allButton = document.getElementById("All");
    const appliedButton = document.getElementById("Applied");
    allButton.style.background = "#0f9bffed";
    appliedButton.style.background = "green";

    const jobCards = document.querySelectorAll("#job-list .job-card");
    jobCards.forEach(job => {
        const jobId = job.id;
        if (arrayapplied.includes(jobId)) {
            job.style.display = "block";
        } else {
            job.style.display = "none";
        }
    });
}

// Function to mark a job as applied
function Applied(applyButtonId, unsubscribeButtonId, jobId) {
    if (!arrayapplied.includes(jobId)) {
        arrayapplied.push(jobId);
    }
    console.log(arrayapplied);

    var applyButton = document.getElementById(applyButtonId);
    var unsubscribeButton = document.getElementById(unsubscribeButtonId);
    applyButton.style.background = "green";
    applyButton.innerText = "Applied";
    unsubscribeButton.style.display = "block";

    alert("Successfully Applied");
}

// Function to unsubscribe from a job
function Unsubscribe(applyButtonId, unsubscribeButtonId, jobId) {
    arrayapplied = arrayapplied.filter(value => value !== jobId);

    var applyButton = document.getElementById(applyButtonId);
    var unsubscribeButton = document.getElementById(unsubscribeButtonId);
    applyButton.style.background = "#0f9bffed";
    applyButton.innerText = "Apply Now";
    unsubscribeButton.style.display = "none";

    alert("Successfully Unsubscribed");
}





window.addEventListener("DOMContentLoaded", (event) => {
    // Function to attach click event to each tag in the job cards
    function attachCardTagClick() {
        document.querySelectorAll(".job-card__tags li").forEach((tag, index) => {
            tag.addEventListener("click", () => tagClicked(tag));
        });
    }

    // Function to attach click event to each 'close' in the filter tags
    function attachFilterTagCloseClick() {
        document.querySelectorAll("#filter-tags-list .close-span").forEach((close, index) => {
            close.addEventListener("click", () => closeClicked(close));
        });
    }

    // Function to handle clicking a tag in a job card
    function tagClicked(clickedTag) {
        let tagText = clickedTag.textContent;
        let filterList = document.getElementById("filter-tags-list");

        // Check if the tag is already in the filter
        let exists = Array.from(filterList.querySelectorAll("li")).some(li => li.textContent.includes(tagText));
        if (!exists) {
            // Create new filter tag
            let newTag = document.createElement("li");
            newTag.innerHTML = `${tagText}<span class="close-span">×</span>`;
            filterList.appendChild(newTag);
        }

        attachFilterTagCloseClick();
        refreshList();
    }

    // Function to handle clicking 'close' on a filter tag
    function closeClicked(closeButton) {
        closeButton.parentElement.remove();
        refreshList();
    }

    // Function to clear all filter tags
    document.getElementById("js-clear-tags").addEventListener("click", () => {
        document.getElementById("filter-tags-list").innerHTML = "";
        refreshList();
    });

    // Function to refresh the job list based on selected filters
    function refreshList() {
        let filterTags = Array.from(document.querySelectorAll("#filter-tags-list li")).map(li => li.textContent.replace('×', '').trim());
        let jobCards = document.querySelectorAll("#job-list .job-card");

        jobCards.forEach(card => {
            let cardTags = Array.from(card.querySelectorAll(".job-card__tags li")).map(li => li.textContent);
            let isMatch = filterTags.every(filterTag => cardTags.includes(filterTag));
            card.style.display = isMatch ? "" : "none";
        });

        attachFilterTagCloseClick();
    }

    // Initial setup
    attachCardTagClick();
    attachFilterTagCloseClick();
    refreshList();
});


