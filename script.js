document.getElementById("startTour").addEventListener("click", function() {
    introJs().setOptions({
        steps: [
            { element: "#navbar", intro: "This is our navigation bar. Use it to explore the site!" },
            { element: "#welcome", intro: "Welcome to our awesome site!" },
            { element: "#feature", intro: "Check out this amazing feature!" },
            { element: "#testimonials", intro: "See what our happy customers say!" },
            { element: "#pricing", intro: "Check out our pricing options!" },
            { element: "#faq", intro: "Got questions? We have answers!" },
            { element: "#contact", intro: "Click here to get in touch with us!" },
            { element: "#footer", intro: "This is the footer. Stay connected with us!" }
        ],
        showProgress: true,
        showBullets: false,
        exitOnOverlayClick: false,
        nextLabel: "Next →",
        prevLabel: "← Back",
        doneLabel: "Finish"
    }).start();
});