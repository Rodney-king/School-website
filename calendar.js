function showCalendar() {
    document.getElementById("status").innerHTML = `
        <h3>📅 School Calendar</h3>
        <ul>
            <li>✅ School starts on <strong>September 1st</strong></li>
            <li>❄ Winter break: <strong>Dec 24th - Jan 1st</strong></li>
            <li>🌸 Spring break: <strong>March 15th - March 22nd</strong></li>
            <li>🎓 Graduation Day: <strong>June 10th</strong></li>
        </ul>
    `;
}

function showResources() {
    document.getElementById("status").innerHTML = `
        <h3>📖 School Resources</h3>
        <ul>
            <li>📚 Library: Open from 8 AM - 6 PM</li>
            <li>💻 Computer Lab: Available for research & coding classes</li>
            <li>🔬 Science Lab: For hands-on experiments</li>
        </ul>
    `;
}

function showAnnouncements() {
    document.getElementById("status").innerHTML = `
        <h3>📢 Announcements</h3>
        <ul>
            <li>🚨 <strong>School is closed</strong> on Labor Day</li>
            <li>👩‍🏫 Parent-Teacher conferences: <strong>October 15th</strong></li>
            <li>🎭 School Play: <strong>November 20th</strong></li>
        </ul>
    `;
}

function enrollNow() {
    document.getElementById("status").innerHTML = `
        <h3>📝 How to Enroll</h3>
        <ul>
            <li>🖊 Fill out the <a href="admissions.html">online application</a></li>
            <li>📄 Submit your transcripts</li>
            <li>💳 Pay the application fee</li>
        </ul>
    `;
}

function checkSchoolStatus() {
    let date = new Date();
    let month = date.getMonth();
    let day = date.getDate();

    let statusMessage;
    if (month < 6) {
        statusMessage = "🏫 School is currently in session.";
    } else if (month === 6 && day < 15) {
        statusMessage = "☀ School is on summer break.";
    } else {
        statusMessage = "🏖 School is closed for the summer.";
    }

    document.getElementById("status").innerHTML = `<h3>${statusMessage}</h3>`;
}
