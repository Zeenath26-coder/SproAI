export function setupGenerateReport() {
    const generateBtn = document.getElementById("generate-btn");
    const checklist = document.getElementById("report-checklist");
    const draftPreview = document.getElementById("draft-preview");
    const draftBodyContent = document.getElementById("draft-body-content");
    if (!generateBtn || !checklist || !draftPreview || !draftBodyContent)
        return;
    const items = checklist.querySelectorAll(".report-item");
    const updateDraft = () => {
        const selected = [];
        items.forEach((item) => {
            const checkbox = item.querySelector("input");
            item.classList.toggle("checked", checkbox.checked);
            if (checkbox.checked)
                selected.push(item.dataset.text || "");
        });
        if (selected.length === 0) {
            draftPreview.classList.remove("show");
            generateBtn.disabled = true;
            return;
        }
        draftBodyContent.innerHTML = `<br>Today I ${selected.join(", ")}.`;
        draftPreview.classList.add("show");
        generateBtn.disabled = false;
    };
    items.forEach((item) => {
        const checkbox = item.querySelector("input");
        checkbox.addEventListener("change", updateDraft);
    });
    generateBtn.addEventListener("click", () => {
        generateBtn.disabled = true;
        generateBtn.textContent = "Generating...";
        setTimeout(() => {
            generateBtn.classList.add("sent");
            generateBtn.textContent = "✓ Sent";
            setTimeout(() => {
                generateBtn.classList.remove("sent");
                generateBtn.textContent = "Generate Report";
                generateBtn.disabled = true;
                items.forEach((item) => {
                    const checkbox = item.querySelector("input");
                    checkbox.checked = false;
                });
                updateDraft();
            }, 2600);
        }, 1000);
    });
}
export function setupScrollLinks() {
    document.querySelectorAll("[data-scroll-to]").forEach((e1) => {
        e1.addEventListener("click", () => {
            const target = document.getElementById(e1.dataset.scrollTo);
            target?.scrollIntoView({ behavior: "smooth" });
        });
    });
}
export function setupRobotEyes() {
    const wrap = document.getElementById("robot-wrap");
    const pupilLeft = document.getElementById("pupil-left");
    const pupilRight = document.getElementById("pupil-right");
    if (!wrap || !pupilLeft || !pupilRight)
        return;
    const maxOffset = 6;
    document.addEventListener("mousemove", (e) => {
        const rect = wrap.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const angle = Math.atan2(dy, dx);
        const distance = Math.min(Math.hypot(dx, dy) / 20, maxOffset);
        const offsetX = Math.cos(angle) * distance;
        const offsetY = Math.sin(angle) * distance;
        pupilLeft.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        pupilRight.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
}
//# sourceMappingURL=aiwindow.js.map