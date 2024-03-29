
let draggedTicket; 
containers.forEach(function(container){
    container.addEventListener("dragstart", (e) => {
        e.target.style.opacity = "0.5";
        draggedTicket = e.target;
    });

    container.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    container.addEventListener("dragend", (e) => {
        e.target.style.opacity = "1";
    });

    container.addEventListener("drop", (e) => {
        const dropContainer = e.target;
        if (draggedTicket) {
            dropContainer.appendChild(draggedTicket);

            const isPending = dropContainer.classList[1] === "pending-cont" ? true : false;
            const ticketId = draggedTicket.querySelector(".ticket-id").innerText.trim();

            allTickets.map(ticket => {
                if (ticket.id === ticketId) {
                    ticket.isPending = isPending;
                }
            });
            saveTicketList(allTickets);
        }


    });
})