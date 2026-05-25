let events = [];
let timeline;

// Load timeline data from browser storage
function loadTimelineData() {

    try {

        const stored = localStorage.getItem("events");

        if (stored) {

            events = JSON.parse(stored);
        }

    } catch (err) {

        console.warn("Failed to read timeline data:", err);
    }
}

// Render Timeline
function renderTimeline() {

    const emptyState = document.getElementById("timeline-empty");

    const dashboard = document.getElementById("timeline-dashboard");

    // Empty State
    if (!events || events.length === 0) {

        emptyState.style.display = "block";

        dashboard.style.display = "none";

        return;
    }

    // Protocol Colors
    const protocolColors = {

        "DNS Query": "#64ffda",

        "DNS Response": "#64ffda",

        "HTTP Request": "#50fa7b",

        "TCP Connection": "#4dabf7",

        "UDP": "#f1fa8c",

        "ICMP": "#ffb86c",

        "THREAT": "#ff5d8f"
    };

    const timelineContainer = document.getElementById("timeline");

    // Timeline Items
    const timelineItems = new vis.DataSet(

        events.map((e) => {

            const eventColor = protocolColors[e.type] || "#8892b0";

            return {

                id: e.id,

                content: `${e.type}: ${truncate(e.description, 55)}`,

                title: `
                    <b>${e.type}</b><br>
                    ${e.description}<br><br>
                    <b>Source:</b> ${e.source_ip || 'N/A'}<br>
                    <b>Destination:</b> ${e.dest_ip || 'N/A'}
                `,

                start: new Date(e.timestamp * 1000),

                group: e.type,

                className: `timeline-${e.type.replace(/\s+/g, "-")}`,

                style: `
                    background: ${eventColor};
                    border: 1px solid ${eventColor};
                    color: #0a192f;
                    font-weight: 700;
                    border-radius: 8px;
                    padding: 6px;
                    box-shadow: 0 0 10px ${eventColor}55;
                `
            };
        })
    );

    // Timeline Groups
    const timelineGroups = new vis.DataSet(

        [...new Set(events.map((e) => e.type))]

        .map((type) => ({

            id: type,

            content: type
        }))
    );

    // Timeline Options
    const timelineOptions = {

        stack: true,

        showCurrentTime: true,

        height: "100%",

        editable: false,

        selectable: true,

        multiselect: false,

        groupOrder: "content",

        verticalScroll: true,

        zoomMin: 1000 * 5,

        zoomMax: 1000 * 60 * 60 * 24,

        margin: {

            item: 10,

            axis: 5
        },

        cluster: {

            maxItems: 5,

            clusterForm: "cluster",

            titleTemplate: "Cluster of {count} events"
        },

        tooltip: {

            followMouse: true
        }
    };

    // Create Timeline
    timeline = new vis.Timeline(

        timelineContainer,

        timelineItems,

        timelineGroups,

        timelineOptions
    );

    // Event Selection
    timeline.on("select", function (props) {

        if (props.items.length > 0) {

            const eventId = props.items[0];

            const event = events.find((e) => e.id === eventId);

            if (event) {

                showDetails(event);
            }
        }
    });
}

// Packet Inspector
function showDetails(event) {

    const detailsContainer = document.getElementById("details-content");

    detailsContainer.innerHTML = `

<div style="
    display:grid;
    grid-template-columns: 180px 1fr;
    row-gap:12px;
    column-gap:20px;
    align-items:center;
    font-size:1rem;
    line-height:1.4;
">

    <div style="color:#64ffda; font-weight:700;">Event ID:</div>
    <div style="color:#bd93f9;">${event.id || 'N/A'}</div>

    <div style="color:#64ffda; font-weight:700;">Type:</div>
    <div style="color:#50fa7b;">${event.type || 'N/A'}</div>

    <div style="color:#64ffda; font-weight:700;">Timestamp:</div>

    <div style="color:#f1fa8c;">
        ${new Date(event.timestamp * 1000).toLocaleString()}
    </div>

    <div style="color:#64ffda; font-weight:700;">Source IP:</div>

    <div style="color:#ffffff;">
        ${event.source_ip || 'N/A'}
    </div>

    <div style="color:#64ffda; font-weight:700;">Destination IP:</div>

    <div style="color:#ffffff;">
        ${event.dest_ip || 'N/A'}
    </div>

    <div style="color:#64ffda; font-weight:700;">Description:</div>

    <div style="
        color:#f8f8f2;
        word-break:break-word;
    ">
        "${event.description || 'N/A'}"
    </div>

</div>

<div style="margin-top:25px;"></div>

<div style="
    border-left: 3px solid #64ffda;
    padding-left: 20px;
    margin-top: 20px;
">

    <div style="
        color:#64ffda;
        font-weight:700;
        margin-bottom:18px;
        font-size:1.1rem;
    ">
        Protocol Data
    </div>

    ${event.details ? Object.entries(event.details).map(([key, value]) => `

        <div style="
            display:flex;
            align-items:center;
            gap:20px;
            margin-bottom:14px;
            flex-wrap:wrap;
        ">

            <div style="
                color:#bd93f9;
                min-width:120px;
                font-weight:600;
            ">
                ${key}:
            </div>

            <div style="
                color:#ff79c6;
                word-break:break-word;
            ">
                ${value}
            </div>

        </div>

    `).join('') : `

        <span style="color:#8892b0;">
            No protocol data available
        </span>

    `}
</div>
`;
}

// Utility Function
function truncate(str, maxLength) {

    if (!str) return "";

    return str.length > maxLength

        ? str.substring(0, maxLength) + "..."

        : str;
}

// Initialize
loadTimelineData();

renderTimeline();